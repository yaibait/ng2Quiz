import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable()
export class QuestionService {
  listQuestionSample:Question[];
  constructor() { }
  getQuestionPackById(_id:string):Question[]{
      var tempReturn:Question[] = quesTest2.slice(0) as Question[];
      tempReturn.forEach((element,index) => {
      element['title'] = "Question " + (index+1);
        element['isAnswer']= false;
        element.listAnswer.forEach(element => {
            element.isCorrect = false;
        });
      });

      return tempReturn;
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
    "title": "",
    "description": "<h2>Giới thiệu sản phẩm V&ocirc; lăng chơi game Logitech G29 (Đen)</h2>\n\n<p>V&ocirc; lăng Logitech G29: v&ocirc; lăng ch&iacute;nh thức cho PS4.<br />\n​Logitech G29 l&agrave; chiếc v&ocirc; lăng đầu ti&ecirc;n của Logitech sau 6 năm vắng b&oacute;ng tr&ecirc;n thị trường (G27 ra mắt 2009). Sản phẩm c&oacute; mức gi&aacute; cao hơn cũ 100$ v&agrave; kh&ocirc;ng đi k&egrave;m cần số. T&iacute;nh tổng thể c&aacute;c bộ thiết bị, G29 kh&ocirc;ng phải l&agrave; qu&aacute; mắc so với c&aacute;c đối thủ.</p>\n\n<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
    "listAnswer": [
      {
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": true
      },
      {
        "content": "<p>dfdfdfd</p>\n",
        "isCorrect": false
      },
      {
        "content": "<p>chao moi nguoi&nbsp;</p>\n",
        "isCorrect": false
      },
      {
        "content": "<p>cau tra loi day</p>\n",
        "isCorrect": false
      },
      {
        "content": "<p>abc ngon roi</p>\n",
        "isCorrect": false
      }
    ],
    "isAnswer": false
  },
  {
    "title": "",
    "description": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
    "listAnswer": [
      {
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": true
      },
      {
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": false
      },
      {
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": false
      },
      {
        "content": "<p><img alt=\"\" src=\"http://bambazonke.co.zw/wp-content/uploads/2016/10/Quiz-Time.png\" style=\"height:253px; width:450px\" /></p>\n",
        "isCorrect": false
      }
    ],
    "isAnswer": false
  },
  {
    "title": "",
    "description": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
    "listAnswer": [
      {
        "content": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
        "isCorrect": false
      },
      {
        "content": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
        "isCorrect": false
      },
      {
        "content": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
        "isCorrect": false
      },
      {
        "content": "<p>Với nhu cầu c&ocirc;ng việc v&agrave; giải tr&iacute; mọi l&uacute;c mọi nơi th&igrave; việc sử dụng dịch vụ 3G k&egrave;m theo những chiếc iPad, m&aacute;y t&iacute;nh bảng để đọc tin tức , facebook, viber &hellip;. l&agrave; gần như kh&ocirc;ng thể thiếu. Để dịch vụ 3G được li&ecirc;n tục,&nbsp;Xu&acirc;n Hiếu Telecom sẽ&nbsp;</p>\n",
        "isCorrect": true
      }
    ],
    "isAnswer": false
  }
];