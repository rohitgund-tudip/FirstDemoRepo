function isEmpty(input)
{
   var textb=document.getElementById(input).value;
   
   if(textb.trim() === "" || textb === undefined || textb === null)
   {
      return true;
   }
   else
   {
      return false;
   }
}