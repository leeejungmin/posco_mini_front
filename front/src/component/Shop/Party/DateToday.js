
const DateToday = () => {
  const todayTime = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    // const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let dayOfWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // return todayYear+ '.'+todayMonth+'.'+todayDate+dayOfWeek+hours+' : '+minutes;
    return todayMonth + '월 ' + todayDate + '일 ' + dayOfWeek + ' ' + hours + '시 ' + minutes + '분';
  }


  return (

    <div>
      <p className="animate-bounce text-gray-400">현재시간 {todayTime().slice(0, 9)}
        <span> {todayTime().slice(9, 12)} </span>
        <span>{todayTime().slice(12, 19)}</span></p>
    </div>
  );
};


export default DateToday;