package hello;

import static spark.Spark.*;

import org.json.JSONObject;

import com.google.gson.Gson;

public class Controller {
	
	private Model model;
	
	
	public Controller(Model model){
		this.model = model;
	}
	
	
	public void login() {
	   post("/login", (request, response)-> {
		   response.header("Access-Control-Allow-Origin", "*");

       	
	        JSONObject json = new JSONObject(request.body());
	        	
	        String email = json.getString("email");
	           
	        String password = json.getString("password");
	        
	        User user = model.login(email, password);
	        
	     
	        if(user != null) {
	        	return new Gson().toJson(user);
	        } else {
	        	
       	    JSONObject jsonObj = new JSONObject();

       	    jsonObj.put("status", 0);
      		
           	
           	return jsonObj;
	        }
	   });
	    
	}
	
	public void register() {
		post("/register", (request, response)-> {
			response.header("Access-Control-Allow-Origin", "*");
		       	
		     JSONObject json = new JSONObject(request.body());
		        
		     String name = json.getString("name");
		        	
		     String email = json.getString("email");
		           
		     String password = json.getString("password");
		        
		     model.addUser(name, email, password);
	          	
		     return json;
		      
		});
		    
	}

}
