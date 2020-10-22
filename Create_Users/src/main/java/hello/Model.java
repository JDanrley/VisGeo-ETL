package visgeo;


import java.util.List;
import java.util.LinkedList;

public class Model {
	
	private List<User> users = new LinkedList<User>();

	
	public void addUser(String name, String email, String password) {
		users.add(new User(name, email, password));
	}
	
	public User login(String email, String password) {
		for(User user:users) {
			if(user.getEmail().equals(email) && user.getPassword().equals(password)) return user;
		}
		return null;
	}

}
