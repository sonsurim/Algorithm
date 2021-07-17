function solution(new_id) {
  let answer = '';
  const exp= /[^\w\d\-\_\.]/g;
  const chainDot = /\.+\./g;
  const lastDot = /^\.|\.$/g;

  // 1 소문자
  answer = new_id.toLowerCase()
           .replace(exp, '')
           .replace(chainDot, '.')
           .replace(chainDot, '.')
           .replace(lastDot, '')

  // 5 new_id === ''
  answer = new_id === '' || answer === '' ? answer = 'a' : answer


  // 6 new_id.length >= 16
  answer = new_id.length >= 16 ? answer.replace(answer.substr(15), '') : answer

 // 7 last dot
 answer = answer.replace(lastDot, '')

  // 8 new_id.length <= 2
  if (new_id.length <= 2 || answer.length <= 2 ) {
    while(answer.length < 3) {
      answer += answer.substr(answer.length - 1)
    }
  }

  return answer;
}