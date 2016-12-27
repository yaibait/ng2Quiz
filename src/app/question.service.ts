import { Injectable } from '@angular/core';
import { Question } from './question';
import { Utils } from './utils';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Quiz } from './quiz';

@Injectable()
export class QuestionService {
  listQuestionSample:Question[];
  constructor(private af:AngularFire) {

   }
  getQuestionPackById(_id:string,callback:(data) => void,error:() => void){

      console.log(_id);
      // var tempReturn:Question[] = JSON.parse(JSON.stringify(quesTest2));
      // suffle question

      // Utils.shuffleArray(tempReturn);

      // tempReturn.forEach((element,index) => {
      // element['title'] = "Question " + (index+1);
      //   element['isAnswer']= false;
      //   // suffle answer
      //   Utils.shuffleArray(element.listAnswer);
      //   element.listAnswer.forEach(element => {
      //       element.isCorrect = false;
      //   });
      // });

      return this.af.database.object("/quizes/"+_id).subscribe((data) => {
        let pack = data as Quiz;
        Utils.shuffleArray(pack.questionList);
        pack.questionList.forEach((element,index) => {
          element['title'] = "Question " + (index+1);
              element['isAnswer']= false;
              // suffle answer
              Utils.shuffleArray(element.listAnswer);
              element.listAnswer.forEach(element => {
              element.isCorrect = false;
            });
          });
        callback(pack);

      },() => {
        
      });
  }
  getQuizPackList(){
    return this.af.database.list("/quizes");
  }
  getResultQuiz(_packId:string,_userQuiz:Question[],callback:(result) => void){
    
    return this.af.database.object("/quizes/"+_packId).subscribe((data) => {
      var result = 0;
      let pack = data as Quiz;
      console.log(pack.questionList,_userQuiz);
      pack.questionList.forEach(questBase => {
          // find question
          let match = false;
          let userQuestion = _userQuiz.find((obj) => {
            return obj.id == questBase.id;
          });

          // compare answer
          for(var i = 0; i < questBase.listAnswer.length; i++ ){
            
            let baseAnswer = questBase.listAnswer[i];

              let userAnswer = userQuestion.listAnswer.find((obj) => {
                  return obj.id == baseAnswer.id;
              });
              
              if((userAnswer.isCorrect == baseAnswer.isCorrect) && (baseAnswer.isCorrect)){
                  match = true;
              }

          }

          if(match){
              result++;
          }

        });
        
        // console.log(result);
        callback(result);
        });
    
  }

  saveQuizPack(quizPack:Quiz):any{
      var objList = this.af.database.list("/quizes");
      return objList.push(quizPack);
  }
}

const testQuestion = [
  {
    "id": 1,
    "description": "Question 1 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": false
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": false
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": false
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 2,
    "description": "Question 2 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": false
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": true
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": false
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "description": "Question 3 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": false
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": false
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": true
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "description": "Question 4 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": false
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": false
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": false
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": true
      }
    ]
  }
];

const quesTest2 = [
  {
    "id" : 1,
    "title": "",
    "description": "<h2>Giới thiệu sản phẩm V&ocirc; lăng chơi game Logitech G29 (Đen)</h2>\n\n<p>V&ocirc; lăng Logitech G29: v&ocirc; lăng ch&iacute;nh thức cho PS4.<br />\n​Logitech G29 l&agrave; chiếc v&ocirc; lăng đầu ti&ecirc;n của Logitech sau 6 năm vắng b&oacute;ng tr&ecirc;n thị trường (G27 ra mắt 2009). Sản phẩm c&oacute; mức gi&aacute; cao hơn cũ 100$ v&agrave; kh&ocirc;ng đi k&egrave;m cần số. T&iacute;nh tổng thể c&aacute;c bộ thiết bị, G29 kh&ocirc;ng phải l&agrave; qu&aacute; mắc so với c&aacute;c đối thủ.</p>\n\n<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
    "listAnswer": [
      {
        "id" : 1,
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": true
      },
      {
        "id" : 2,
        "content": "<p>dfdfdfd</p>\n",
        "isCorrect": false
      },
      {
        "id" : 3,
        "content": "<p>chao moi nguoi&nbsp;</p>\n",
        "isCorrect": false
      },
      {
        "id" : 4,
        "content": "<p>cau tra loi day</p>\n",
        "isCorrect": false
      },
      {
        "id" : 5,
        "content": "<p>abc ngon roi</p>\n",
        "isCorrect": false
      }
    ],
    "isAnswer": false
  },
  {
    "id" : 2,
    "title": "",
    "description": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
    "listAnswer": [
      {
        "id" : 1,
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": true
      },
      {
        "id" : 2,
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": false
      },
      {
        "id" : 3,
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": false
      },
      {
        "id" : 4,
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": false
      }
    ],
    "isAnswer": false
  },
  {
    "id" : 3,
    "title": "",
    "description": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
    "listAnswer": [
      {
        "id" : 1,
        "content": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
        "isCorrect": false
      },
      {
        "id" : 2,
        "content": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
        "isCorrect": false
      },
      {
        "id" : 3,
        "content": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
        "isCorrect": false
      },
      {
        "id" : 4,
        "content": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
        "isCorrect": true
      }
    ],
    "isAnswer": false
  }
];