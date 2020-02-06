templates["Component"] = "<div id=\"<%= c._id %>\">\r\n    Base component\r\n</div>";
templates["HelloWorld"] = "<div id=\"<%= c._id %>\" class=\"helloWorld\">\r\n    <h1>Hello World!</h1>\r\n    <h3>This is a test component.</h3>\r\n    <p>Please look inside my code to see what you can do with OSPF!</p>\r\n\r\n    <div>Names: </div>\r\n    <ul>\r\n        <% for(let name of c.names){ %>\r\n        <li><%= name %></li>\r\n        <% } %>\r\n    </ul>\r\n    <input id=\"<%= c.createId('nameInput') %>\" placeholder=\"Add new name...\">\r\n    <input onclick=\"<%= c.self() %>.addNameClickHandler()\" type=\"button\" value=\"Add #1\">\r\n    <input id=\"<%= c.createId('addInput') %>\" type=\"button\" value=\"Add #2\">\r\n\r\n    <input type=\"button\" id=\"<%= c.createId('createDollyInput') %>\" value=\"Create dolly component\">\r\n\r\n    <%\r\n        if(c.getChild(\"dollyComponent\")){\r\n            __append(c.getChild(\"dollyComponent\").render());\r\n        }\r\n    %>\r\n</div>";
