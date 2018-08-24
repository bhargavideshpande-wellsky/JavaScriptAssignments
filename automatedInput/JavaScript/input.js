var currentFocus=null;
function displayHide()
{
    document.getElementById("cross").style.visibility = "hidden";
    document.getElementById("myList").style.visibility = "hidden";
}
function auto()
{
    document.getElementById("cross").style.visibility = "visible";
    document.getElementById("myList").style.visibility = "visible";
    document.getElementById("myList").innerText="";
    var node,textnode,flag=false;
    var employeeNames=["Bhargavi","Anushka","Nihit","Swinal","Pallvi","Rajpreet","Swapnil","Ankita","Ashwarya","Mohit","Shrijeet","Vishwas"];
    var inputField= document.getElementById("myInput");
    var val = inputField.value;
    employeeNames.sort();

        if(!val)
        {
            document.getElementById("cross").style.visibility = "hidden";
            document.getElementById("myList").style.visibility = "hidden";
            return false;
        }
    for(let i = 0;i<employeeNames.length;i++)
    {
        if (employeeNames[i].toLowerCase().includes(val.toLowerCase()))
        {
            node = document.createElement("LI");
            textnode = document.createTextNode(employeeNames[i]);
            node.appendChild(textnode);
            node.setAttribute("class", "democlass");
            node.setAttribute("onclick","setValue(this.innerHTML)");
            document.getElementById("myList").appendChild(node);
        }
    }

    if(document.getElementById("myList").innerHTML=="")
    {
        document.getElementById("myList").innerHTML="Not Found";
    }

    var namesList = document.getElementsByTagName("li");

    if(event.keyCode == 40)
    {
        if(currentFocus==null || currentFocus == namesList.length - 1)
        {
            currentFocus = 0;
            namesList[currentFocus].setAttribute("class", "colorclass");

        }
        else
         {
            namesList[currentFocus].setAttribute("class", "nocolorclass");
            currentFocus++;
            namesList[currentFocus].setAttribute("class", "colorclass");
        }
        if(currentFocus>4)
        {
            document.getElementById("myList").scrollBy(0,18);
        }

    }
    else if(event.keyCode == 38)
    {
        if(currentFocus==0)
        {
            currentFocus=namesList.length;
        }
        if(currentFocus>0)
        {
            currentFocus--;
            namesList[currentFocus].setAttribute("class", "colorclass");

            console.log(currentFocus);

            //namesList[currentFocus++].setAttribute("class", "nocolorclass");
        }
        if(currentFocus>4)
        {
            document.getElementById("myList").scrollBy(0,-18);
        }

    }

    if(event.keyCode == 13)
    {
        document.getElementById("myInput").value = namesList[currentFocus].innerText;
    }
}
function setValue(text)
{
    document.getElementById("myInput").value = text;

}
function display()
{
    document.getElementById("myList").innerHTML= "";
    document.getElementById("myInput").value = "";
    document.getElementById("cross").style.visibility = "hidden";
    document.getElementById("myList").style.visibility = "hidden";
}
