var images = 
["https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-260nw-582282625.jpg",
"https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6",
"https://image.freepik.com/free-vector/little-asian-boy-showing-thumbs-up-gesture-happy-cute-kid-smiling-toddler-preteen-child-cartoon-character_71593-840.jpg",
"https://lh3.googleusercontent.com/proxy/DSRZjHHCNx8fqhCmbEwi6OOtnpw7qVvCi2F7rpxL31nShy1VQwZfMMNIIYIwpeQcxlunrWAmk5hwjbQo24ICnAYl"];

var names = [ "Father","Mother","Brother","Sister"];

var i = 0
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

}