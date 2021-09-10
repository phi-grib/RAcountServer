# RAcountServer

## Download

- Download zip file

or 

- `git clone https://github.com/phi-grib/RAcountServer.git`

or for SSH-key access,

- `git clone git@github.com:phi-grib/RAcountServer.git`


## Install

Change to the project working directory

`cd RAcountServer`

For the last stable working demo tag use

`git checkout vreport0.4`

Install and activate the enviroment

`conda env create -f environment.yml`



In Linux, activate the environment using:

`source activate RAcount`

or

`conda activate RAcount`

In Windows, use:

`activate RAcount`

or

`conda activate RAcount`

## Run
At the root folder execute:

`python manage.py runserver`

and then navigate to <http://localhost:8000>
(http://127.0.0.1:8000 does not work).

## Login
Example accounts are:
- Example case study, User: manuel.pastor@upf.edu  Password: Manuel
- Empty user, User: ***REMOVED*** Password: Ignacio
