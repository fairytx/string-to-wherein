const str1 = document.getElementById('str1');
str1.onchange = async function(){
    str1.value='in (\''+this.value.replace(/(\r\n|\r|\n)/g, '\\n').split('\\n').join('\',\'')+'\')';
    str1.select();
    await navigator.clipboard.writeText(str1.value);
}
