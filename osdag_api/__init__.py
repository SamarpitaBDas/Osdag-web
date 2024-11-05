from osdag_api.module_finder import *

module_id_to_module = {
    "connection_session": "Fin Plate Connection",
    "cleat_angle_connection_session": "Cleat Angle Connection",
}

developed_modules = module_id_to_module.values()

module_dict = [
    {
        "key": "Fin Plate Connection",
        "image": "/static/images/modules/fin_plate_connection.png",
        "name": "Fin Plate",
        "path": "Connection/Shear Connection"
    }
]