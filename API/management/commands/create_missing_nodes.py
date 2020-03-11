from django.core.management.base import BaseCommand, CommandError
from API.models import Nodes, Projects, NodeType
from django.db.models import F

class Command(BaseCommand):
    help = 'Adds missing nodes to a project'

    def add_arguments(self, parser):
        parser.add_argument('project_id', nargs='*', type=int)
        parser.add_argument(
            '--stop-on-error',
            action='store_true',
            dest='stop-on-error',
            default=False,
            help='Stop if any exception is raised.',
        )
    
    def handle(self, *args, **options):
        
        if len(options['project_id']) > 0:
            project_ids = options['project_id']
        else:
            project_ids = Projects.objects.all().values_list('pk',flat=True)
            

        node_types = set(list(NodeType.objects.all().values_list('pk',flat=True)))
        for project_id in project_ids:
            try:
                project = Projects.objects.get(pk=project_id)
            except Projects.DoesNotExist:
                raise CommandError('project_id "%d" does not exist' % project_id)
            nodes = set(list(Nodes.objects.filter(project=project_id).values_list('node_seq',flat=True)))
            missing_nodes = node_types - nodes
            created_nodes = []
            for node_type in sorted(list(missing_nodes)):
                try:
                    self._add_node_with_defaults(project,node_type)
                    created_nodes.append(node_type)
                except Exception as e:
                    self.stdout.write(self.style.ERROR('Node "%d" for project "%d" cannot be created.' % (node_type, project_id)))
                    if options['stop-on-error']:
                        self._print_succesfull_nodes(created_nodes,project_id)
                        raise e

            self._print_succesfull_nodes(created_nodes,project_id)
            self.stdout.write(self.style.SUCCESS('All nodes successfully created for project "%d"' % project_id))
    
    def _add_node_with_defaults(self, project, node_seq):
        node = Nodes.objects.create(project=project,node_seq=NodeType.objects.get(pk=node_seq))
    def _print_succesfull_nodes(self,created_nodes,project_id):
        if len(created_nodes) > 0:
            self.stdout.write('Nodes %s for project "%d" created.' % (','.join(list(map(str,created_nodes))), project_id))
        else:
            self.stdout.write('No nodes for project "%d" created.' % (project_id))

