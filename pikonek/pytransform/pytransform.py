import sys
sys.PYARMOR_LICENSE = '/etc/pikonek/license/license.lic'
name = 'pytransform'
m = __import__(name, globals(), locals(), ['*'])
sys.modules[__name__].__dict__.update(m.__dict__)