# Blog-App Installation Process: 
1. Clone this repository onto your system
2. Change directory to `webblog/` and make a virtual environment by running `virtualenv env`
3. Open terminal and start virtual environment by running `source ./env/bin/activate` 
4. run `pip install -r requirements.txt --no-index --find-links file:///tmp/packages` to make requirements 
5. run `python manage.py runserver` to start the django server 
6. Open another terminal and start virtual environment by running `source ./env/bin/activate` 
7. run `npm install` 
8. run `npm run dev` to start React Server
