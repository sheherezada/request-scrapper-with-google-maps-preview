# from datetime import datetime
# import logging
#
# from django.conf import settings
#
# from apscheduler.schedulers.blocking import BlockingScheduler
# from scripts.clock import clock_update
#
#
# def start():
#     scheduler = BlockingScheduler()
#     scheduler.add_job(clock_update, 'interval', hours=24)
#
#     scheduler.start()