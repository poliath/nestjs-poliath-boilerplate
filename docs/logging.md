# Logging

Default Nest.js logger is replaced with [Winston](https://github.com/winstonjs/winston) logger. 

## Configuration and files

This configuration will output:
- error logs into logs/YYYY-MM-DD-error.log
- all logs (info, warning, debug, error…) into logs/YYYY-MM-DD-combined.log
- all logs level into the console

By default it is configured to keep logs for 30 days

