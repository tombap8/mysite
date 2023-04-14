// 보그 PJ : 로그인 페이지 JS - login.js

$(()=>{ ///////// jQB /////////////////

    /********************************* 
        로그인 페이지 유효성검사하기
    *********************************/
   // 검사대상 : #mid, #mpw
   const mid = $("#mid");
   const mpw = $("#mpw");

   // 유효성검사 기준: 전송시 아이디,비번 모두 빈값 없여야함!

   // 이벤트 대상 : #sbtn
   // 이벤트 종류 : click
   $("#sbtn").click(function(e){
        // 기본기능막기(서브밋 기능차단!)
        e.preventDefault();

        // 공백데이터 처리함수 //
        // const groSpace = val => val.replace(/\s/g,"");

        console.log("아이디:",mid.val().trim());
        console.log("비번:",mid.val().trim());

        // 유효성 검사하기
        // 아이디 비번 중 하나라도 비어 있으면 불통과!
        if(mid.val().trim()==="" || mpw.val().trim()===""){
            alert("아이디,비밀번호 모두 입력하세요!");
            // 초기화! + 아이디에 포커스
            mid.val("").focus();
            mpw.val("");
        } ///// if : 불통과시 //////
        else{ // 통과시 /////
            // 원래는 DB에서 조회된 결과를 받고
            // 성공메시지를 보이거나 첫페이지로 
            // 보내준다!

            // DB조회 페이지를 호출하여 결과를 받아서 처리함!
            // Ajax 의 post() 메서드 사용!
            // $.post(URL,data,callback)
            $.post(
                // 1. 전송할 페이지
                "./process/loginSet.php",
                // 2. 전송할 데이터
                {
                    "mid":mid.val(), // 아이디
                    "mpw":mpw.val() // 비번
                },
                // 3. 결과처리함수(콜백함수)
                function(res){ // res 결과값 전달변수
                    console.log("결과값:",res);

                    // 3-1. 로그인 성공시 : ok
                    if(res==="ok"){
                        alert("로그인에 성공하셨습니다!");
                    } //// if ////

                    // 3-2. 비밀번호 틀린경우 : again
                    else if(res==="again"){
                        alert("비밀번호가 일치하지 않습니다!");
                        // 비밀번호 지우고 비번에 포커스
                        mpw.val("").focus();
                    } //// else if ////

                    // 3-3. 아이디가 없는경우 : no
                    else if(res==="no"){
                        alert("사용가능한 ID가 아닙니다!");
                        // 초기화! + 아이디에 포커스
                        mid.val("").focus();
                        mpw.val("");
                    } //// else if ////
                } ///// 콜백함수 /////
            ); ///////////// post ///////////////




        } ////// else : 통과시 ////////

   }); /////////// click ///////////







}); /////////////// jQB /////////////////