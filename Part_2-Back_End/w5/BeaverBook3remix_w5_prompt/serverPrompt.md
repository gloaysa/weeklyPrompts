import modules

configure app

define middleware
static serving
	any resources that do not change as the data changes 
	(style, scripts, HTML ...)

Beaver handlers   (these will manipulate the models)
|  HTTP method  |  URL | Behavior  |  
|------------- |---------- |--------- |  
| | index | |
|  GET  | /home |  renders home page  |
| | create | |
| GET  | /beaver  | renders 'signin' page |
| POST  | /beaver  | sends new beaver to database |
| | read | |
|  GET |  /beaver/:id | renders single beaver's profile |
| | update | |
| GET  | /beaver/:id/update  | send page for modifying a beaver |
| POST  | /beaver/:id/update  | sends updated beaver data |
| | delete | |
| GET  | /beaver/:id/delete  | get page to confirm beaver deletion |
| POST  | /beaver/:id/delete  | delete da beaver |

start server
