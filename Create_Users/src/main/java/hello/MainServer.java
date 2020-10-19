package visgeo;

import static spark.Spark.*;


public class MainServer {
	
	final static Model model = new Model();
	
    public static void main(String[] args) {

        ProcessBuilder process = new ProcessBuilder();
        Integer port;
        if (process.environment().get("PORT") != null) {
            port = Integer.parseInt(process.environment().get("PORT"));
        } else {
            port = 3333;
        }
        port(port);

		staticFileLocation("/static");

		Controller controller = new Controller(model);
		
		controller.login();
		controller.register();
		
    }
    
}
