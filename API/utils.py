import operator
def order_queryset_list_by_values_list(queryset_list,field_name,values_list):
    ordered_list = [(values_list.index(queryset[field_name]), queryset) for queryset in queryset_list]
    ordered_list.sort(key=operator.itemgetter(0))
    return list(map(operator.itemgetter(1),ordered_list))