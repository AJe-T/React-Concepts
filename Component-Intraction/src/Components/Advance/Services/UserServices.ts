import { IUsers } from "../Models/IUsers";

export class UserServices {
  private static users: IUsers[] = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "علیرضا",
        last: "محمدخان",
      },
      location: {
        street: {
          number: 8570,
          name: "تقوی",
        },
        city: "گرگان",
        state: "گلستان",
        country: "Iran",
        postcode: 78335,
        coordinates: {
          latitude: "13.1168",
          longitude: "-131.7862",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "aalyrd.mhmdkhn@example.com",
      login: {
        uuid: "a97d2fec-109f-42d0-9790-9a613bba3323",
        username: "organicbird659",
        password: "homerj",
        salt: "gcJ0iZcK",
        md5: "60fe9fa80b43607d81634751c1868484",
        sha1: "cb1af97cc74085ed12630d496937ca94d84ae21b",
        sha256:
          "d841ae5de9ee80c0c71df8c04302a2c4f627447ecf236572bb2636285da93810",
      },
      dob: {
        date: "1980-05-29T11:55:19.176Z",
        age: 43,
      },
      registered: {
        date: "2009-12-30T07:18:30.393Z",
        age: 13,
      },
      phone: "027-76221254",
      cell: "0925-548-3668",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/11.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
      },
      nat: "IR",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Yolanda",
        last: "Martínez",
      },
      location: {
        street: {
          number: 6157,
          name: "Calle del Prado",
        },
        city: "Gijón",
        state: "Región de Murcia",
        country: "Spain",
        postcode: 63603,
        coordinates: {
          latitude: "0.5758",
          longitude: "-25.1714",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "yolanda.martinez@example.com",
      login: {
        uuid: "4887d5aa-d5cf-480b-9d5f-90f8ad950587",
        username: "lazykoala406",
        password: "everett",
        salt: "c9FM2Jvd",
        md5: "9f90a7a50c0f3b3941deb1974125470c",
        sha1: "79d47ea63895e6016004ae7f3abaedcb68399205",
        sha256:
          "94f2c168b03ba2d7c795685b94cd89c2bccfbe047578c7b42dfaeed07da63feb",
      },
      dob: {
        date: "1998-05-26T05:47:51.667Z",
        age: 25,
      },
      registered: {
        date: "2019-12-23T13:10:15.235Z",
        age: 3,
      },
      phone: "972-533-097",
      cell: "692-449-888",
      id: {
        name: "DNI",
        value: "63539123-M",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/48.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/48.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/48.jpg",
      },
      nat: "ES",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Nataša",
        last: "Rukavina",
      },
      location: {
        street: {
          number: 6290,
          name: "Sare Bernar",
        },
        city: "Užice",
        state: "South Bačka",
        country: "Serbia",
        postcode: 56911,
        coordinates: {
          latitude: "-28.6848",
          longitude: "160.9203",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "natasa.rukavina@example.com",
      login: {
        uuid: "e8b49540-fce3-476e-9dda-695e3457d9aa",
        username: "bigwolf850",
        password: "9999999",
        salt: "g9fQNB0C",
        md5: "95e6637ee96115e45a5a4bb3c9bc1ed5",
        sha1: "8526f0844e7dcddf83fa425fb68edc8d82b8e5d4",
        sha256:
          "2f3ccf6153b6377e94b83a0f8c408d5fae14e83a61552a461e653335e7431cf4",
      },
      dob: {
        date: "2001-01-23T02:16:02.960Z",
        age: 22,
      },
      registered: {
        date: "2014-09-16T21:27:01.296Z",
        age: 8,
      },
      phone: "035-8152-404",
      cell: "063-8302-010",
      id: {
        name: "SID",
        value: "869178670",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/22.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
      },
      nat: "RS",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Theo",
        last: "Chow",
      },
      location: {
        street: {
          number: 585,
          name: "Charles St",
        },
        city: "Flatrock",
        state: "Northwest Territories",
        country: "Canada",
        postcode: "M6O 5G1",
        coordinates: {
          latitude: "69.7174",
          longitude: "8.7703",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "theo.chow@example.com",
      login: {
        uuid: "acec81f1-aa7f-4701-bdf9-3c9d2946065d",
        username: "orangefrog806",
        password: "formula",
        salt: "As0T3NLq",
        md5: "82bd521daaf917c0cdf18b3254f3cfb0",
        sha1: "51e02ecf6f0fe1e20ee8e077d97657881f47a5f6",
        sha256:
          "9833a2c0c27906a9488091252898ac030cf32ca407e1fd38c9eb4a15df12bcb4",
      },
      dob: {
        date: "1994-03-03T08:30:21.890Z",
        age: 29,
      },
      registered: {
        date: "2004-02-13T07:27:52.897Z",
        age: 19,
      },
      phone: "J09 B76-5017",
      cell: "S58 H74-6300",
      id: {
        name: "SIN",
        value: "662561992",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/60.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/60.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
      },
      nat: "CA",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Ava",
        last: "Johnson",
      },
      location: {
        street: {
          number: 8435,
          name: "Brock Rd",
        },
        city: "Cochrane",
        state: "Saskatchewan",
        country: "Canada",
        postcode: "Y2J 4O0",
        coordinates: {
          latitude: "-30.4481",
          longitude: "-171.3373",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "ava.johnson@example.com",
      login: {
        uuid: "3110ebf2-ccac-4022-9220-456f64fbea94",
        username: "browndog737",
        password: "scout",
        salt: "9xD9cGXr",
        md5: "18a48b5febaca1b4625e812b54406089",
        sha1: "852747eb5b711dd353efb228c8c1d5b3aac0efc9",
        sha256:
          "b6dfd34384940f68ae89f2594813257d1b690fdecb6f82d31ba7e7b88393be36",
      },
      dob: {
        date: "1958-11-01T03:18:28.948Z",
        age: 64,
      },
      registered: {
        date: "2016-01-13T00:39:45.495Z",
        age: 7,
      },
      phone: "X05 D25-0581",
      cell: "T29 O83-4159",
      id: {
        name: "SIN",
        value: "317623452",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/80.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
      },
      nat: "CA",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Xavier",
        last: "Lévesque",
      },
      location: {
        street: {
          number: 433,
          name: "College Ave",
        },
        city: "Sandy Lake",
        state: "Saskatchewan",
        country: "Canada",
        postcode: "W1K 7M8",
        coordinates: {
          latitude: "-24.7119",
          longitude: "17.5366",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "xavier.levesque@example.com",
      login: {
        uuid: "5cd1951f-1bb8-402b-b9d4-b7950098e58d",
        username: "orangelion767",
        password: "auburn",
        salt: "ZjOAQ74H",
        md5: "a7577eda64a27b15b27b3ecf3652e7e6",
        sha1: "28e0c54b803b5e697e0499f7824e82582deb9c32",
        sha256:
          "28e27d4d4edf3a2efa22e48075cdeeb1ee5043be680b5640460a171326546474",
      },
      dob: {
        date: "1969-03-03T23:52:31.846Z",
        age: 54,
      },
      registered: {
        date: "2021-02-11T06:12:53.855Z",
        age: 2,
      },
      phone: "C37 M35-8282",
      cell: "R67 T91-4420",
      id: {
        name: "SIN",
        value: "678449612",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/48.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
      },
      nat: "CA",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Julien",
        last: "Aubert",
      },
      location: {
        street: {
          number: 9990,
          name: "Rue Saint-Georges",
        },
        city: "Vaulruz",
        state: "Genève",
        country: "Switzerland",
        postcode: 3392,
        coordinates: {
          latitude: "-18.8367",
          longitude: "-73.4362",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "julien.aubert@example.com",
      login: {
        uuid: "38b09b06-67aa-4499-9ef4-7b89321a37c9",
        username: "redpeacock578",
        password: "shane",
        salt: "gT0oXz9O",
        md5: "8a2cb5922211b60151b39f86f6a0339c",
        sha1: "a2b81913268e6d24e9ca6f98aecf97a974725dd4",
        sha256:
          "8349e8dc7e14902c8a954ba8b3ddd2354ca66c05a2d88ae9843fa5bfd234de87",
      },
      dob: {
        date: "1950-03-12T17:22:27.555Z",
        age: 73,
      },
      registered: {
        date: "2003-07-29T07:02:26.619Z",
        age: 20,
      },
      phone: "076 908 00 13",
      cell: "079 018 77 30",
      id: {
        name: "AVS",
        value: "756.5996.8279.42",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/97.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg",
      },
      nat: "CH",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Anatoliya",
        last: "Maslyak",
      },
      location: {
        street: {
          number: 8587,
          name: "P'yatnicka",
        },
        city: "Novodnistrovsk",
        state: "Rivnenska",
        country: "Ukraine",
        postcode: 73823,
        coordinates: {
          latitude: "61.8274",
          longitude: "-105.2533",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "anatoliya.maslyak@example.com",
      login: {
        uuid: "3ecf67f0-8c4c-432b-bade-0824908d2c4e",
        username: "lazypeacock327",
        password: "potato",
        salt: "KCeie24y",
        md5: "e0244000f40d7268f413a3ef0c7180a4",
        sha1: "315e3d6c7e8197b10bc3d9c393f69b2d5d936215",
        sha256:
          "498d8cf93c03c82bfff0564e395d1e32fab2cd570360b09565b4df182de5ceb9",
      },
      dob: {
        date: "1956-04-26T14:55:15.731Z",
        age: 67,
      },
      registered: {
        date: "2006-04-02T23:59:54.980Z",
        age: 17,
      },
      phone: "(099) Q85-4145",
      cell: "(099) G22-8051",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/94.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/94.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
      },
      nat: "UA",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Timeo",
        last: "Duval",
      },
      location: {
        street: {
          number: 5398,
          name: "Place de L'Abbé-Basset",
        },
        city: "Vitry-sur-Seine",
        state: "Finistère",
        country: "France",
        postcode: 27709,
        coordinates: {
          latitude: "9.9488",
          longitude: "139.4937",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "timeo.duval@example.com",
      login: {
        uuid: "5729fd31-1cee-41a6-ab93-6793e4578117",
        username: "smallmeercat844",
        password: "butts",
        salt: "uD4OE2pa",
        md5: "d33c5edcbcf1c560020ed0ad4039d6a3",
        sha1: "10d0f1e7e96e151e904433dc5bb0b76046a80164",
        sha256:
          "c6fc8a3b5349846fdbaf84cafbe38bf1fa61d4b7b7f7b9c8b932bc6df7b6b9d4",
      },
      dob: {
        date: "1981-11-10T02:57:32.137Z",
        age: 41,
      },
      registered: {
        date: "2008-05-09T02:39:52.900Z",
        age: 15,
      },
      phone: "04-45-73-64-71",
      cell: "06-53-42-09-52",
      id: {
        name: "INSEE",
        value: "1811008573697 57",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/21.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/21.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Kübra",
        last: "Yılmazer",
      },
      location: {
        street: {
          number: 9937,
          name: "Istiklal Cd",
        },
        city: "Sivas",
        state: "Burdur",
        country: "Turkey",
        postcode: 94813,
        coordinates: {
          latitude: "82.1210",
          longitude: "29.1044",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "kubra.yilmazer@example.com",
      login: {
        uuid: "504be2d2-a6af-4e81-89b6-e715b758e4d4",
        username: "bluerabbit706",
        password: "lockerroom",
        salt: "DUCI347y",
        md5: "01b818165d8b80d08912e6ad76857dab",
        sha1: "2b65c2d4630d935032a6dc18d7907a116c9c8673",
        sha256:
          "8a8862be5795efbc0f1c50e909947e153c74fbf70499cdf4aaaab8ad4a0fe65a",
      },
      dob: {
        date: "1948-01-09T15:55:22.274Z",
        age: 75,
      },
      registered: {
        date: "2019-08-18T01:49:16.785Z",
        age: 4,
      },
      phone: "(651)-103-6490",
      cell: "(207)-499-6357",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/1.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
      },
      nat: "TR",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Florian",
        last: "Vidal",
      },
      location: {
        street: {
          number: 5878,
          name: "Rue Pierre-Delore",
        },
        city: "St. Ursen",
        state: "Thurgau",
        country: "Switzerland",
        postcode: 5600,
        coordinates: {
          latitude: "28.0722",
          longitude: "37.0022",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      email: "florian.vidal@example.com",
      login: {
        uuid: "bbf26730-1690-4202-91df-f656a34128e3",
        username: "silverswan324",
        password: "bassman",
        salt: "gNKbdsWs",
        md5: "138d388dbe75681f2f5282e50eb52abd",
        sha1: "f1199747b02fc09a27effa41e5517b9fd658d668",
        sha256:
          "07a69df779516e88558c8816ea7d07b9fe3b357fda7f7e2dbf5b5a7ba54773c8",
      },
      dob: {
        date: "1981-07-12T21:06:38.060Z",
        age: 42,
      },
      registered: {
        date: "2012-08-30T19:30:08.235Z",
        age: 11,
      },
      phone: "076 276 88 04",
      cell: "079 149 64 00",
      id: {
        name: "AVS",
        value: "756.7214.3405.93",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/51.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
      },
      nat: "CH",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Martín",
        last: "Márquez",
      },
      location: {
        street: {
          number: 328,
          name: "Calle Covadonga",
        },
        city: "San Sebastián de Los Reyes",
        state: "Asturias",
        country: "Spain",
        postcode: 25170,
        coordinates: {
          latitude: "9.7396",
          longitude: "-62.3886",
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic",
        },
      },
      email: "martin.marquez@example.com",
      login: {
        uuid: "611c0872-4649-4d10-b877-2af6de4fddf9",
        username: "goldendog956",
        password: "marty",
        salt: "7fwgcPMe",
        md5: "29ba783bf2f0a0878b81d0515b561788",
        sha1: "ef5804c988c8a5e4c7d4b4963f92236f162cf83a",
        sha256:
          "210a8b4bd72c39ed31d8a6f6108ccf47fbcbd9ad69c5b7bad023899cddbac284",
      },
      dob: {
        date: "1995-08-01T17:24:10.531Z",
        age: 28,
      },
      registered: {
        date: "2013-03-23T22:36:20.350Z",
        age: 10,
      },
      phone: "919-399-336",
      cell: "627-754-738",
      id: {
        name: "DNI",
        value: "29497736-N",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/33.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/33.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
      },
      nat: "ES",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Timothy",
        last: "Garcia",
      },
      location: {
        street: {
          number: 9985,
          name: "Montée du Chemin-Neuf",
        },
        city: "Cuarny",
        state: "Zug",
        country: "Switzerland",
        postcode: 2139,
        coordinates: {
          latitude: "31.5848",
          longitude: "-45.6100",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "timothy.garcia@example.com",
      login: {
        uuid: "52072ede-5cd5-4df7-945b-645a10979a48",
        username: "organicbutterfly303",
        password: "wisdom",
        salt: "RMvKSj4j",
        md5: "4e9ef96c9d11a25fdb03e2cfd1ef413a",
        sha1: "6e2ccb3a9c9620bf526983f9df66f885637a4521",
        sha256:
          "2729dd83d9e15f770911c2f8743b59b27313bb2b45b6c313f03b08cc56cc63f5",
      },
      dob: {
        date: "2001-01-03T04:45:52.669Z",
        age: 22,
      },
      registered: {
        date: "2016-10-08T00:04:45.010Z",
        age: 6,
      },
      phone: "078 855 43 58",
      cell: "079 914 42 45",
      id: {
        name: "AVS",
        value: "756.7360.8505.67",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/45.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      },
      nat: "CH",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Pascual",
        last: "Carbajal",
      },
      location: {
        street: {
          number: 1236,
          name: "Boulevard Ramírez",
        },
        city: "Jurica (Ex-Hacienda)",
        state: "Jalisco",
        country: "Mexico",
        postcode: 64142,
        coordinates: {
          latitude: "-45.1984",
          longitude: "42.7797",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "pascual.carbajal@example.com",
      login: {
        uuid: "cd77fa23-d16b-47d2-b801-ffe401bf3c6f",
        username: "angrydog664",
        password: "ferris",
        salt: "FiVjTPV3",
        md5: "280c4100eb6294af28c96f6ed0d91f69",
        sha1: "e9699207e076994a77ba8bcbd3d33f282bcfdfe6",
        sha256:
          "d418ff9a9005c5cd4241b4ff9c9e12aa1150791d85c884acac02fd5af05ca9f3",
      },
      dob: {
        date: "1995-02-03T02:49:32.240Z",
        age: 28,
      },
      registered: {
        date: "2019-02-12T05:43:01.374Z",
        age: 4,
      },
      phone: "(611) 495 0922",
      cell: "(638) 558 2817",
      id: {
        name: "NSS",
        value: "35 11 81 1481 2",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/43.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/43.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg",
      },
      nat: "MX",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Xavier",
        last: "Singh",
      },
      location: {
        street: {
          number: 2394,
          name: "Peel St",
        },
        city: "Clinton",
        state: "Saskatchewan",
        country: "Canada",
        postcode: "V2H 5J9",
        coordinates: {
          latitude: "27.3635",
          longitude: "107.5970",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "xavier.singh@example.com",
      login: {
        uuid: "ab811f43-e0c0-4015-912d-bc609fead4cf",
        username: "happyladybug995",
        password: "volcano",
        salt: "1kiczfGB",
        md5: "fbf95dbc3b94a2765d7e2ad8e5a40ab3",
        sha1: "92eb3cea1256c289f5595c1a72832a74a3c9d2aa",
        sha256:
          "178707212905ea7016a05d959e6b1fcf1d3ce34ba895e073a075c548457a7444",
      },
      dob: {
        date: "1968-01-19T06:22:04.655Z",
        age: 55,
      },
      registered: {
        date: "2019-01-30T09:32:27.475Z",
        age: 4,
      },
      phone: "L73 P59-0540",
      cell: "X41 V41-0880",
      id: {
        name: "SIN",
        value: "136234903",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/17.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
      },
      nat: "CA",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Elif",
        last: "Beşerler",
      },
      location: {
        street: {
          number: 5061,
          name: "Fatih Sultan Mehmet Cd",
        },
        city: "İzmir",
        state: "Kütahya",
        country: "Turkey",
        postcode: 92660,
        coordinates: {
          latitude: "-17.6847",
          longitude: "-97.6395",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "elif.beserler@example.com",
      login: {
        uuid: "ea08a3da-9bb9-4712-9de6-b7c433fead87",
        username: "heavyswan361",
        password: "miller",
        salt: "334PLY3G",
        md5: "41f79c7a2826a01432d18b5e2fff6aa3",
        sha1: "1b92c587241efeb9d0a0cc945c5d22ef9d99822f",
        sha256:
          "bf679e398c47979b05911e655d03c310b4834cc7277b83353cdc7a6236cc6e14",
      },
      dob: {
        date: "1979-12-10T09:19:52.217Z",
        age: 43,
      },
      registered: {
        date: "2011-11-01T17:36:58.227Z",
        age: 11,
      },
      phone: "(383)-784-0504",
      cell: "(715)-247-7569",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/31.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
      },
      nat: "TR",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Constance",
        last: "Louis",
      },
      location: {
        street: {
          number: 6750,
          name: "Rue des Abbesses",
        },
        city: "Caen",
        state: "Lot-et-Garonne",
        country: "France",
        postcode: 45143,
        coordinates: {
          latitude: "-71.7127",
          longitude: "-20.7071",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "constance.louis@example.com",
      login: {
        uuid: "8e434d09-265e-4448-bf43-57ea7d303c9d",
        username: "bigsnake737",
        password: "loverboy",
        salt: "PZMsgOir",
        md5: "0b0b29bcdafb66bab9521e663b3c8c6b",
        sha1: "5ac65e2501f337d4e11343b932924f348bb9aff5",
        sha256:
          "c0b27d8c42f89828b2fa59d78ae40701f0ed8d9c6635b4efd800b6e5ccdf57ae",
      },
      dob: {
        date: "1998-10-14T02:35:46.370Z",
        age: 24,
      },
      registered: {
        date: "2012-06-23T01:12:53.385Z",
        age: 11,
      },
      phone: "04-51-11-03-16",
      cell: "06-24-59-65-97",
      id: {
        name: "INSEE",
        value: "2980942168812 90",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/19.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Maddison",
        last: "Taylor",
      },
      location: {
        street: {
          number: 4810,
          name: "Montreal Street",
        },
        city: "Blenheim",
        state: "Northland",
        country: "New Zealand",
        postcode: 86760,
        coordinates: {
          latitude: "28.0052",
          longitude: "-70.5210",
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein",
        },
      },
      email: "maddison.taylor@example.com",
      login: {
        uuid: "3b79c6a7-b285-4631-b830-d9b5bebea8e0",
        username: "bigmeercat127",
        password: "zzzzzzz",
        salt: "hv4Y8P5N",
        md5: "5ba5b88ee07358b66a9c04df5af0d334",
        sha1: "aed6ed9c648b1f75e5d2cf0a757081b62cf5b182",
        sha256:
          "9e4e73310f226f6545d710dbf847e40ee50bc87fcb3373594911cae271d979e3",
      },
      dob: {
        date: "1984-06-18T19:05:31.949Z",
        age: 39,
      },
      registered: {
        date: "2003-10-30T00:15:08.229Z",
        age: 19,
      },
      phone: "(768)-571-6600",
      cell: "(889)-403-4287",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/27.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Veeti",
        last: "Ojala",
      },
      location: {
        street: {
          number: 2744,
          name: "Tehtaankatu",
        },
        city: "Mänttä",
        state: "Åland",
        country: "Finland",
        postcode: 52030,
        coordinates: {
          latitude: "21.8031",
          longitude: "177.7599",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "veeti.ojala@example.com",
      login: {
        uuid: "7b2f7c78-def6-483c-a0d0-a9221597f031",
        username: "crazytiger626",
        password: "1984",
        salt: "ekrdW8xX",
        md5: "6e800506904c42582a1da48c258b6836",
        sha1: "047bbb15690919469ce058936ee923053e5f574b",
        sha256:
          "6d3785836d11c0a9473f0c655decfb41214c0f42b4901129f83690d2db597a81",
      },
      dob: {
        date: "1972-04-14T08:39:38.696Z",
        age: 51,
      },
      registered: {
        date: "2018-12-07T17:45:49.553Z",
        age: 4,
      },
      phone: "03-947-503",
      cell: "044-257-43-74",
      id: {
        name: "HETU",
        value: "NaNNA295undefined",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/25.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/25.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
      },
      nat: "FI",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Jennifer",
        last: "Davidson",
      },
      location: {
        street: {
          number: 9800,
          name: "The Drive",
        },
        city: "Inverness",
        state: "Tyne and Wear",
        country: "United Kingdom",
        postcode: "T66 1ZF",
        coordinates: {
          latitude: "50.1357",
          longitude: "-33.5256",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "jennifer.davidson@example.com",
      login: {
        uuid: "ffa69b22-4f09-4fdb-91a9-004c41be3a88",
        username: "heavyfish946",
        password: "motley",
        salt: "cstbXXFE",
        md5: "c84ab4d0d1f7732a8931f5d1ce1afa1f",
        sha1: "bb5392f683c72c5510df33db19ebe84812b72708",
        sha256:
          "23b5d428bd99aaa5bc8b12abaf03f1c9792bf53fb04cd6198ba4eff0bd7b6a15",
      },
      dob: {
        date: "1961-01-25T04:34:45.091Z",
        age: 62,
      },
      registered: {
        date: "2019-05-08T04:33:58.370Z",
        age: 4,
      },
      phone: "019467 79349",
      cell: "07415 334342",
      id: {
        name: "NINO",
        value: "TM 48 43 32 X",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/67.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Javier",
        last: "Hale",
      },
      location: {
        street: {
          number: 7848,
          name: "Station Road",
        },
        city: "Peterborough",
        state: "West Midlands",
        country: "United Kingdom",
        postcode: "TG64 5QA",
        coordinates: {
          latitude: "2.0152",
          longitude: "-63.6642",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "javier.hale@example.com",
      login: {
        uuid: "3badd16e-26ea-4700-8426-5608f550c860",
        username: "orangepanda221",
        password: "leather",
        salt: "OmIwSSQx",
        md5: "5b0cce4164b29469b10e1470f377f95d",
        sha1: "e9dddab1fa38b9564ad00f808853a8038877905d",
        sha256:
          "3e359e6b494f0a932fb909a39abcf107bae0794642b54f0aeda91f2ba21cb064",
      },
      dob: {
        date: "1986-07-03T10:10:18.750Z",
        age: 37,
      },
      registered: {
        date: "2014-01-04T06:40:09.787Z",
        age: 9,
      },
      phone: "0111 113 9287",
      cell: "07694 266028",
      id: {
        name: "NINO",
        value: "PL 29 28 61 E",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/93.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/93.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/93.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Acilino",
        last: "Barros",
      },
      location: {
        street: {
          number: 1043,
          name: "Rua Bela Vista ",
        },
        city: "Vila Velha",
        state: "Sergipe",
        country: "Brazil",
        postcode: 98515,
        coordinates: {
          latitude: "-51.5051",
          longitude: "89.0042",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "acilino.barros@example.com",
      login: {
        uuid: "12f1510a-9195-42fe-852f-4ff65a3cb87b",
        username: "blacktiger276",
        password: "andersen",
        salt: "BwBQ2O1c",
        md5: "8974f2821ef2b56da3228d3d3f829192",
        sha1: "0248b4a699224770b0ad3a1aa1814cef14c07d84",
        sha256:
          "456f6f02cf9377d67c028c57bcb1b1b5692f891283b74c6683883f4ec7765c7b",
      },
      dob: {
        date: "1975-12-16T21:39:34.284Z",
        age: 47,
      },
      registered: {
        date: "2003-02-12T00:25:35.014Z",
        age: 20,
      },
      phone: "(66) 0830-5544",
      cell: "(63) 2685-6652",
      id: {
        name: "CPF",
        value: "342.645.547-89",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/15.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/15.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
      },
      nat: "BR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Balendra",
        last: "Nayak",
      },
      location: {
        street: {
          number: 5363,
          name: "Ranganathan St",
        },
        city: "Tiruchirappalli",
        state: "Uttar Pradesh",
        country: "India",
        postcode: 44606,
        coordinates: {
          latitude: "-35.5642",
          longitude: "122.3410",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "balendra.nayak@example.com",
      login: {
        uuid: "4f6ebb49-822e-459f-a3f6-b959b2e2f913",
        username: "orangeswan899",
        password: "kenobi",
        salt: "5sF5njL0",
        md5: "e6f1ccd59b24d90463b64c5b80245004",
        sha1: "80fa40c005a365f3e7bf4b18621939aeade5cadf",
        sha256:
          "4b0843596ef8571a7afdfa68aa7252a58f6d767ff7ca015c49127ecbb772b3b7",
      },
      dob: {
        date: "1997-09-05T09:33:54.716Z",
        age: 26,
      },
      registered: {
        date: "2011-04-20T12:42:03.997Z",
        age: 12,
      },
      phone: "8147247740",
      cell: "8376102722",
      id: {
        name: "UIDAI",
        value: "032266169017",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/72.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/72.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg",
      },
      nat: "IN",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Fabien",
        last: "Lecomte",
      },
      location: {
        street: {
          number: 2518,
          name: "Montée du Chemin-Neuf",
        },
        city: "Villarsel-sur-Marly",
        state: "Fribourg",
        country: "Switzerland",
        postcode: 8800,
        coordinates: {
          latitude: "88.7347",
          longitude: "79.6549",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "fabien.lecomte@example.com",
      login: {
        uuid: "72ad8865-8dff-4376-b68c-590d8099ba2c",
        username: "browngoose290",
        password: "leroy",
        salt: "YvPRg3yi",
        md5: "9ec97b3b8538f741a2582e5b9e8c3949",
        sha1: "0981e9820c186a647d92beeb1cd07ac318ddf940",
        sha256:
          "58a54028573c5343f615376039827961e89ac60b5db19e79e84d274652f98ac9",
      },
      dob: {
        date: "1947-06-16T12:30:02.034Z",
        age: 76,
      },
      registered: {
        date: "2007-09-29T02:42:30.018Z",
        age: 15,
      },
      phone: "076 665 44 94",
      cell: "078 956 20 99",
      id: {
        name: "AVS",
        value: "756.4364.6005.25",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/7.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/7.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
      },
      nat: "CH",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Christina",
        last: "Frazier",
      },
      location: {
        street: {
          number: 4478,
          name: "E Pecan St",
        },
        city: "Hervey Bay",
        state: "Northern Territory",
        country: "Australia",
        postcode: 2065,
        coordinates: {
          latitude: "-59.4545",
          longitude: "-137.3857",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "christina.frazier@example.com",
      login: {
        uuid: "1267982c-2bac-4e50-aaed-7136f80f444d",
        username: "purpleostrich232",
        password: "vantage",
        salt: "CkCmQZO0",
        md5: "ec5bb88ddd6db0dab52b6e6a93966e04",
        sha1: "e3663a62d4ebeddbc9e493da2c54c2a85fa692ef",
        sha256:
          "4c77912221994f005a0249a5213303b4b1453f98c3e4513b4f1fd648d780fd28",
      },
      dob: {
        date: "1949-10-24T05:45:58.736Z",
        age: 73,
      },
      registered: {
        date: "2021-10-14T23:52:11.593Z",
        age: 1,
      },
      phone: "08-7112-5405",
      cell: "0422-702-607",
      id: {
        name: "TFN",
        value: "875348382",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/4.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
      },
      nat: "AU",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Esperanza",
        last: "Pascual",
      },
      location: {
        street: {
          number: 1015,
          name: "Calle de Arganzuela",
        },
        city: "Lugo",
        state: "Navarra",
        country: "Spain",
        postcode: 51476,
        coordinates: {
          latitude: "16.3259",
          longitude: "27.3184",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "esperanza.pascual@example.com",
      login: {
        uuid: "c4d2b591-2d22-46d2-813f-da3b3d3d2206",
        username: "organicduck910",
        password: "catch22",
        salt: "ZyKV5lio",
        md5: "8d048c234a7ced98e23b53e1ef3c9bfd",
        sha1: "84262a7ab62946b442fbd55676ca170d374daaf1",
        sha256:
          "eb5d210cf393a34055dc96ff8874d9818c67dd202730cf8442c64a8e16029bec",
      },
      dob: {
        date: "1962-04-06T16:56:40.583Z",
        age: 61,
      },
      registered: {
        date: "2017-11-12T01:46:02.168Z",
        age: 5,
      },
      phone: "969-656-124",
      cell: "687-142-448",
      id: {
        name: "DNI",
        value: "34307289-K",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/19.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
      },
      nat: "ES",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Sanja",
        last: "Orlić",
      },
      location: {
        street: {
          number: 2542,
          name: "Dvadesetdevetog Novembra",
        },
        city: "Preševo",
        state: "Central Banat",
        country: "Serbia",
        postcode: 61748,
        coordinates: {
          latitude: "-75.3908",
          longitude: "9.4797",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "sanja.orlic@example.com",
      login: {
        uuid: "7f67f6d2-7c59-49e1-871e-72c621dd01f7",
        username: "angrypeacock680",
        password: "redline",
        salt: "jV8MVf5Y",
        md5: "06e3c63bec2fc86430257d4e3cc4c3e7",
        sha1: "6fd50f842f5cccaf2eda263994fc13d0ca233efa",
        sha256:
          "8f1e8d875348deb1292002ca7fc30481aca0f9038dd87028299ac735cb7fc74d",
      },
      dob: {
        date: "1984-06-14T17:51:50.201Z",
        age: 39,
      },
      registered: {
        date: "2021-03-02T02:45:26.159Z",
        age: 2,
      },
      phone: "018-3744-575",
      cell: "060-2431-561",
      id: {
        name: "SID",
        value: "927381589",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/31.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
      },
      nat: "RS",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Ernesto",
        last: "Patist",
      },
      location: {
        street: {
          number: 1830,
          name: "C. Kasjestrjitte",
        },
        city: "Lochem",
        state: "Noord-Brabant",
        country: "Netherlands",
        postcode: "8042 DY",
        coordinates: {
          latitude: "10.9002",
          longitude: "-139.6146",
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein",
        },
      },
      email: "ernesto.patist@example.com",
      login: {
        uuid: "ffca7371-8a0e-4654-bfec-fcc349664b23",
        username: "beautifulmeercat560",
        password: "fiddle",
        salt: "7ZL28OEc",
        md5: "ce8cff49d440407bdf961722b4d6e872",
        sha1: "d77aca02d9523f65bae757899009c0104b0813c2",
        sha256:
          "2b08a5972ec7eeb676e0a35426e5b275bef4daa07c5538bdad29857fbd190030",
      },
      dob: {
        date: "1961-12-06T07:48:59.913Z",
        age: 61,
      },
      registered: {
        date: "2012-03-05T06:10:08.331Z",
        age: 11,
      },
      phone: "(025) 1462381",
      cell: "(06) 58680730",
      id: {
        name: "BSN",
        value: "24173595",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
      },
      nat: "NL",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Carla",
        last: "Delgado",
      },
      location: {
        street: {
          number: 232,
          name: "Calle Mota",
        },
        city: "Málaga",
        state: "Comunidad Valenciana",
        country: "Spain",
        postcode: 23928,
        coordinates: {
          latitude: "-70.8024",
          longitude: "-49.6928",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "carla.delgado@example.com",
      login: {
        uuid: "a357e06d-4485-4edd-93bb-8c68eddea9de",
        username: "ticklishcat697",
        password: "blunt",
        salt: "PjbgJbfH",
        md5: "97073806e393d971676ee0428344d7b3",
        sha1: "854029ee83c8ee7ddd8186ec3ab51c3c5dfca16d",
        sha256:
          "ba0edc18756444342a2e35c1086db7b43bf9227d44807d9674dd99272d6b90e8",
      },
      dob: {
        date: "1980-05-12T01:38:08.785Z",
        age: 43,
      },
      registered: {
        date: "2015-06-27T03:16:50.122Z",
        age: 8,
      },
      phone: "929-396-691",
      cell: "694-296-661",
      id: {
        name: "DNI",
        value: "00022173-R",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/45.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg",
      },
      nat: "ES",
    },
    {
      gender: "female",
      name: {
        title: "Mademoiselle",
        first: "Désirée",
        last: "Boyer",
      },
      location: {
        street: {
          number: 7396,
          name: "Place du 22 Novembre 1943",
        },
        city: "Villmergen",
        state: "Thurgau",
        country: "Switzerland",
        postcode: 5084,
        coordinates: {
          latitude: "5.1324",
          longitude: "37.0590",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "desiree.boyer@example.com",
      login: {
        uuid: "6d49755d-4bd7-4081-bb28-36bb9af6b396",
        username: "orangekoala327",
        password: "universe",
        salt: "ysjg58rw",
        md5: "51f781661f167e1cbd5aefe23552fa4f",
        sha1: "c03cbf529c5e3b3c33e09ee7ba75e141dbf7a160",
        sha256:
          "01191428d6ae318be07da66982f2c26e3da73b7edc1c7b816c8a388979208bcd",
      },
      dob: {
        date: "1952-10-05T14:15:05.514Z",
        age: 70,
      },
      registered: {
        date: "2018-08-30T02:54:31.043Z",
        age: 5,
      },
      phone: "076 039 19 36",
      cell: "075 946 91 00",
      id: {
        name: "AVS",
        value: "756.2130.3964.84",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/92.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg",
      },
      nat: "CH",
    },
  ];
  public static getAllUsers(): IUsers[] {
    return this.users;
  }
}
