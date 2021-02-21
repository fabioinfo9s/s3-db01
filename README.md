## Sensor-Log API

| **Route**    | **Action** | **Body**                                                                  | **Method** |
|--------------|------------|---------------------------------------------------------------------------|------------|
| api/sensors/ | Create     | {sensor_id : int, humidity : double, temperature : double, up_time : int} | Post       |
| api/sensors/:id | Update     | {sensor_id : int, humidity : double, temperature : double, up_time : int} | PUT        |
| api/sensors/ | Get All    |                                                                           | GET        |
| api/sensors/:id | Get One    |                                                                           | GET        |
| api/sensors/:id | Delete     |                                                                           | DELETE          |
| api/sensors/ | Delete All   |                                                                           | DELETE          |