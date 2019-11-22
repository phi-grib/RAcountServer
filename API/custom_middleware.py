"""
Copyright 2012-2019
Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
https://creativecommons.org/licenses/by-sa/4.0/
Derived from Stack Overflow 
https://stackoverflow.com/a/11423845
User: cooncesean (https://stackoverflow.com/users/329902/cooncesean)
"""
from datetime import timedelta
from django.utils import timezone
from django.conf import settings


EXTENDED_SESSION_DAYS = settings.SESSION_COOKIE_AGE / (3600*24)
EXPIRE_THRESHOLD = 14
class ExtendUserSession(object):
    """
    Extend authenticated user's sessions so they don't have to log back in
    every 2 weeks (set by Django's default `SESSION_COOKIE_AGE` setting). 
    """
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        response = self.get_response(request)

        # Code to be executed for each request/response after
        # the view is called.

        return response
    
    def process_request(self, request):
        # Only extend the session for auth'd users
        if request.user.is_authenticated():
           now = timezone.now()

        # Only extend the session if the current expiry_date is less than EXPIRE_THRESHOLD days from now
        if 'rememberme' in request.session:
            if request.session['rememberme']:
                if request.session.get_expiry_date() < now + timedelta(days=EXPIRE_THRESHOLD):
                    request.session.set_expiry(now + timedelta(days=EXTENDED_SESSION_DAYS))
        