<!DOCTYPE html>
  <head>
    <title>This is My page</title>

  </head>
  <<script type="text/javascript">
    function check(){
      var a;
      a = Number(document.getElementById("a").value);

      if(a %2 ==0){
        alert("Number is even");
      }
      else {
        alert("Number is odd");
      }
    }
  </script>
  <<body>
    Enter a Number : <<input id="a"<br>
    <input type="button" onclick="check()" value="CHECK"
  </button>
  </body>
</html>
