let s1 =
  "feswinhfmhktxrodlghzlegrzzgtivmgwrnruvcuwaduskmnrklhgrkgnfgvnvssnqynhuxdhkycwaiuibfgwsmcaqdksjhzvuaspkvvdaxrmzhfxhfpemxdwjsgdfgtoszxdwwlnwwfwswmkyromhsmpfwtozxqofawfrelahljhwqcnzgvuqzjusrhaibylgyxtdvrszoqzgletsvyyswxpouwoiinefpkosnvhdekapflrcbfjkcnkrhnlixzgbphlrutzpgclenezoecwjexmbfskwlupotwvocbrotqywidbyodlynknfhviukkdxihgyvnmrhcjbdpvymcieqkfhfiwzfrhyxogwnkexgqfyytnhhvjoholkcthcqipgacbbrirjpqxkaxvdprroismmjgevebpmpbjycfhdroduayrxfaibqdkpchzmogihaenshptanqnbwivwinwzichquomiivgubitouahowqpqwnbeuxycqktcmyztpextuczttidkqlvytsjbwbhhlubbixjkoeorvfhzdpaezjowufqpbotlfmrrfyxuriivuzixtzsfyylfsldchqoqhvbxdqaivyzcztwivfkiyaurlcgflwbdufezlxrzedvfdizhipdhrlbddnlheiukszkgmzpgjbennkyddfagirzcugpuyvdwyvutwlrgduudgkczmplwoeinkzabvvontaqpjaipmkwowonosdsbxjizdmmssbgkcnwpqirsxpjzfylmazxetwwhjjdzyopifmxyvskcjtjsykbwktkgrkckcdgmuqzekuphmqdgkeiampnkngdmszkgevmexomlszdgnkrtaveyopfuqqshlwloazjdxawvsezmnuwyvoefojljtiwqhhmjlybmefkxktdubiscrydighkyxussmnjmwcwtbrflfdeptuobyghmmgrjabygmqostlntpfmxslucnyquixeoxwqcpn";
let s2 =
  "mygxbaghfdkuhczqhwbvtpriovszrevddnxawhooeezryfbhwoodbitretawsfwnlwjeuouxchhbqnhclmkveooriximygjqacfrsefulnuyhrtqajvqtispqdcnoicifwazszfkabnthtwtihqaiazxvrwgpamoylqyuscyftojzjqyhdijjiswcqslitokrwcaniceimswjeglmdbkxvystrquceckvxpklizeowstgobrzetshrkrcmrhsofguhlzalbidjaaoexbghfbuderyawwxyaujpxrpyyskodtxxnheetyvlqwftxfkshyqaizeacodsmxaxjcdwlrhlxlneeunrnwnnqrztxyexfmvaqumfrcdsccqnnfupvlxlnpviotmjmjdxtsvcolifhqzpfziejzqvqtdqkndtfwuypkstvctihufvcwhfzsccshpaamejceccydedohorxeinozpvwgyvadntsmzoddawsmbhxbnnpwmsuvxqnbmmqsbymzcnufeaboxpacgyeknwdyrvvzwahejaztqhpwaodervglifvmswvoschmfciouewwvdmmpygmnonnixshnypmcdvqobvjrpwlxqbwzwxfnyfujjazsjattbhypafnyppsxlkqsjrtiqpisyyboumpgyqyekmulllkqgptjpvcphkxulibayxzlulucuebfowujcdxaffxwqgfmzcsqyuzkjgifcipazccidtbsnvnpkfhnelkwxancksgtfmakpryhpgrvbydwuqqsdqgjcuzfduccngxqvzvuhijnudihhzkbzgevtzxntaczmqqekiebypgzblqdouiwhvncvtxxivtrlzdkeyxvmuezycfffrkggsxstcejjbfvzwuzoejezcefvdorxfstnuhawfwwtvfkqabexfqaozkorvjfcyejljdtrtcsdspzqbyvsmurbsnpgomsyfntukjwjotrucsvstnkullu";

function Test(strA, strB) {
  let res = 0;

  // traverse string A till end and
  // xor with res
  for (let i = 0; i < strA.length; i++) {
    // xor with res
    res ^= strA.charCodeAt(i);
  }

  // traverse string B till end and
  // xor with res
  for (let i = 0; i < strB.length; i++) {
    // xor with res
    res ^= strB.charCodeAt(i);
  }
  let string = String.fromCharCode(res);
  strB.indexOf();
  let indexes = [];
  for (let i = 0; i < strB.length; i++) {
    if (strB[i] == string) {
      indexes.push(i);
    }
  }
  console.log(indexes);

  // print result at the end
}

console.log(Test(s1, s2));
