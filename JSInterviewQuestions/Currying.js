function mul(x)
{
return  function(y)
{
   return {
      result:x*y,
      sum:function(z)
      {
      return x*y+z
      }
   }
}
}
console.log(mul(2)(3).result);//6
console.log(mul(2)(3).sum(2));//8
