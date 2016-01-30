/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Daniel Bravo";

var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);

var role = "Front End Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedRole);
