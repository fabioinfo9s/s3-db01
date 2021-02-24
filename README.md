## Sensor-Log API

| **Route**       | **Action** | **Body**                                                                  | **Method** |
|-----------------|------------|---------------------------------------------------------------------------|------------|
| api/sensorlogs/   | Create     | {sensor_id : int, humidity : double, temperature : double, up_time : int} | Post       |
| api/sensorlogs/:id | Update     | {sensor_id : int, humidity : double, temperature : double, up_time : int} | PUT        |
| api/sensorlogs/    | Get All    |                                                                           | GET        |
| api/sensorlogs/:id | Get One    |                                                                           | GET        |
| api/sensorlogs/:id | Delete     |                                                                           | DELETE          |
| api/sensorlogs/    | Delete All   |                                                                           | DELETE          |