from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.core.validators import RegexValidator

class CASRNValidator(RegexValidator):
    def __init__(self):
        super().__init__(regex=r'\d{2,7}-\d{2}-\d{1}', 
                       message="Invalid CAS registry number format")
    def __call__(self, value):
        super().__call__(value)
        control_digit = int(value[-1])
        n = []
        n.append(int(value[-3]))
        n.append(int(value[-4]))
        n.append(int(value[-6]))
        n.append(int(value[-7]))
        for i in range(8,len(value)+1):
            n.append(int(value[-i]))
        computed_control_digit = sum([(idx+1)*value for idx, value in enumerate(n)]) % 10
        
        if control_digit != computed_control_digit:        
            raise ValidationError(
                _('Invalid control digit in %(value)s'),
                params={'value': value},
            )