function Validation()
{
  if (firstName() && lastName() && address() && phone() && emailID() && gen())
    return true;
  else
      return false;
}

function firstName()
{
  var alphaExp = /^[a-zA-Z]+$/;
  var fname = document.forms["Myform"]["firstname"].value;
  if (fname == "")
    {
        document.getElementById('msg1').innerText = "Please provide valid input";
        return false;
    }
  else
  {
    if(fname.match(alphaExp))
      {
          document.getElementById('msg1').innerText = "";
        return true;
      }
      else
      {
        document.getElementById('msg1').innerText = "Please provide aplhabet only";
        return false;
      }
  }
}

function lastName()
{
    var alpha1Exp = /^[a-zA-Z]+$/;
    var lname = document.forms["Myform"]["lastname"].value;
    if (lname==""){
      document.getElementById('msg2').innerText = "Please provide valid input";
      return false;
    }
    else
    {
        if(lname.match(alpha1Exp))
        {
            document.getElementById('msg2').innerText = "";
          return true;
        }
        else{
        document.getElementById('msg2').innerText = "Please provide aplhabet only";
        return false;
        }
    }


}

function phone()
{
    var numericExpression = /^[0-9]+$/;
    var phoneNumber =  document.forms["Myform"]["phonenumber"].value;
    if (phoneNumber === "")
    {
        document.getElementById('msg3').innerText = "Please provide valid input";
        return false;
    }
    else
    {
        if(phoneNumber.match(numericExpression))
        {
            document.getElementById('msg3').innerText = "";
          return true;
        }
        else{
        document.getElementById('msg3').innerText = "Please provide numbers only";
        return false;
        }
    }
}

function emailID()
{
    var emailExp=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailId =  document.forms["Myform"]["email"].value;
    if (emailId  == "")
    {
        document.getElementById('msg4').innerText = "Please provide valid input";
        return false;
    }
    else
    {
        if(emailId.match(emailExp))
        {
            document.getElementById('msg4').innerText = "";
          return true;
        }
        else{
        document.getElementById('msg4').innerText = "Please provide valid Email Id";
        return false;
        }
    }
}

function address()
{
  var address = document.forms["Myform"]["Address"].value;
  if (address == "")
    {
        document.getElementById('msg5').innerText = "Please provide valid input";
        return false;
    }
    else
    {
        document.getElementById('msg5').innerText = "";
        return true;
    }
}

function gen()
{
    if(!document.getElementById('male').checked  && !document.getElementById('female').checked)
    {
        document.getElementById('msg6').innerText = "Please select gender";
        return false;
    }
    else
    {
        document.getElementById('msg6').innerText = "";
        return true;
    }
}
