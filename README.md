### curl で動作確認

\$ curl -X POST --data-binary @./knative.png http://localhost/upload
{"x_file_path":"/temp/0009568258"}

\$ curl http://localhost/  
{"message":"Hello, WORLD!"}

\$ curl http://localhost/test
{"message":"Test!"}
