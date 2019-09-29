<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
        <textarea name="text" id="text" cols="30" rows="10" onblur="var text=this.value"></textarea><br>
        <input type="text" name="key" id="key" value="23" onblur="var key=parseInt(this.value)"><br>
        <input type="button" value="encrypt" onclick="enc(text, key)">
        <input type="button" value="decrypt" onclick="decrypt()"><br>
        <textarea name="result" id="result" cols="30" rows="10"></textarea>
    <script>

        function decrypt(){
            enc(text, 26-key);
        }

        function enc(text, key) {
                len = text.length;
                output = '';
                if (key < 1 || key > 26) {
                    document.getElementById('result').innerHTML = "key must be between 1 and 26!";
                    return;
                } else if (key == 26) {
                    document.getElementById('result').innerHTML = text;
                    return;
                } else {
                    for (i = 0; i < len; i++) {
                        code = text.charCodeAt(i);
                        if ((code >= 65) && (code <= 90)) {
                            output += String.fromCharCode(((code - 65 + key) % 26) + 65);
                        } else if ((code >= 96) && (code <= 122)) {
                            output += String.fromCharCode(((code - 65 + key) % 26) + 96);
                        } else {
                            output += text[i];
                        }
                    }
                }
            }
    </script>
</body>
</html>
