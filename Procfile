release: python manage.py migrate
web: gunicorn quiz-taker.wsgi --log-file - --log-level debug
