export function getChats() {
  return [
    {
      id: 1,
      participants: [
        {
          id: 1,
          name: "Thomas",
          avatarUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
          id: 2,
          name: "Helga",
          avatarUrl:
            "https://media.istockphoto.com/photos/portrait-of-a-smiling-young-woman-picture-id905456806?k=6&m=905456806&s=612x612&w=0&h=PvYHS82wm1FlEh7_8Owj_OamqJfJ8g3igDrfbA4Xo7I="
        }
      ],
      messages: [
        {
          id: "c4b92677",
          text: "some text1",
          publishDate: 1560280429,
          ownerId: 1,
          recepientId: 2
        },
        {
          id: "c5babaff",
          text: "another text1",
          publishDate: 1560288429,
          ownerId: 2,
          recepientId: 1
        }
      ]
    },
    {
      id: 2,
      participants: [
        {
          id: 1,
          name: "Thomas",
          avatarUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
          id: 3,
          name: "Arthur",
          avatarUrl:
            "https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1511808075655-YGGD8CMMY2R85X05OKVK/ke17ZwdGBToddI8pDm48kIKay4bYLpKTFWoXFdGxjdZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmo3_5ncHsS_KC884-Z46vJXn_CAy8A416_wq-2ydr5e5Si7pbxezXfOOzs3720f9z/DBS_Kevin_web_2640.jpg?format=750w"
        }
      ],
      messages: [
        {
          id: "c23424ad",
          text: "some text",
          publishDate: 1560988429,
          ownerId: 1,
          recepientId: 3
        },
        {
          id: "c45e75a4",
          text: "another text",
          publishDate: 1568988429,
          ownerId: 3,
          recepientId: 1
        }
      ]
    }
  ];
}
