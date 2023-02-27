'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ed34c289483bfc22a98f06601f4eae42",
".git/config": "df1d8e688bd7646a8f8c90431275dacf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "eaaa3ae01ccab03dbed04ac46f2895e3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aac3faf7fab5073ff97f1009b87fa967",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1fa6d5f22de04497571da04290e8b9b4",
".git/logs/refs/heads/main": "1299093316e968c4135c98164b221af3",
".git/logs/refs/remotes/origin/HEAD": "ff1a5086a03404f42dc53223c9a2915c",
".git/logs/refs/remotes/origin/main": "1cacd63ed2ae28a75750a2ce3eb6acee",
".git/objects/00/46b419a17547fe35f6989a1545e8ed55563c9b": "ce1ac4bc6a90e600feea32ee96ea1e64",
".git/objects/01/69bf45104d8a5190075babe57e602f1f98dc61": "2b98a3456b9d2b1ff5f724232f15f0de",
".git/objects/05/686d7525ab258f1e3ad747491d995c98628a9b": "f6ccbd0e4fbe583dcd5538d91d92ab23",
".git/objects/07/1534f51ec6ac2f996841f483e9cb27dcf9e28b": "6a3d54c27b334447ff968729825841d8",
".git/objects/08/9f482d4d5edf86330710a5c960151405425136": "f3f453efe1bb2991377e752e461c6086",
".git/objects/09/074954d2fd56487068ec7c829445853d4ac8b1": "e457bfbf750b4dd70c786452f4781e0f",
".git/objects/09/11d580d8855186a5f9d1a9d37c05f484de8a96": "0c0e52ca93eaa5517008e11d12cb2db1",
".git/objects/09/1c47efecdc7e69ffabb8cdda39cfe1f594f761": "3f2bb989a2838c3d69fa6f2fb4cbb73d",
".git/objects/09/946036e4e492cba3f34727620ede8acfbf2bc0": "1da22bbfb1583fe4626ddb0872a46501",
".git/objects/0b/b736fb0f6f76c797337a85c2acfe36ea917975": "ee686a317c589e29cf374cf305fd8d0e",
".git/objects/0b/e913caa21a0d73ee605bcdb16f3ba87e5e65aa": "12fd63829ac1610b5e313245474a4769",
".git/objects/0c/900e4ce632ee897d1d9a6e84445299b6635ec7": "b87221a1ffdfcbb6aceaa22b40253eb9",
".git/objects/0d/6195a66fde90e874b4a0c11b0fda6482310c82": "c32dbf6dd486b5dfdc4aa2c872738b42",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/0e/c9380878c0dd6d8ba2dddb5c8fd1b40345b8cc": "607e46caec079284052195b4da107766",
".git/objects/10/06d8650476632b8cff78507d8d19904a25a82b": "9b7ce6048a7c07a453a890912d1b2495",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/21c08e611d12f0194a9b16b3e3dd60ec7c4fa6": "bf1c968e15d7682e23d208cfed201a73",
".git/objects/16/1cf56aa7e971084de17db5277671b7aa721c47": "2b605ee9e81f600f8bc113c01b2f7d21",
".git/objects/16/5a72f9589cc226f47aa2f1a7067bb870a89b0b": "ebfd46e9c9b1a6889027d4df8f1ed037",
".git/objects/18/01dd33ddbb3a3d919e924c4681d9426785b6d2": "8f43e428150b50636b8e8ff51d127ec2",
".git/objects/18/06089a746865855a4b24097c0742945f869388": "a5995c2a949bf18810d12f7a2fd28600",
".git/objects/18/8d897abbcbc57f8e2d03f41a4fb81283e0453b": "6498c4060efe11731e6630962dd5fb03",
".git/objects/1e/007142b0231ecf88ea8b129253366b3b17562a": "45c8dbe5c0d7cde336a8697c35d4e825",
".git/objects/1e/4b016e369b838d11f145cdce40d95358743843": "48cd111ad9a3e845ae8f7ebf4d666e29",
".git/objects/22/ada7409a7e039ff8cd1b3f27f4d65b01e8e2f1": "40940375ec7fbbbeaefc477a06ce867e",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/29/b1eb366087f6dd8437f0b76f6b2f1bedac4dc6": "d02942d4dd2c01e8259682b9a19182f5",
".git/objects/29/b5ec3c9461c6e8216599caccc21299fcd2ddc3": "97705ea8c0031f052a5e87672daa225e",
".git/objects/2a/f82e12d019ebb28855e26f93c36224faf2d06f": "75791c0fe682e762b2cedaa52cabd8c5",
".git/objects/2f/e0155ab1dd888afb992feb94c4d4eb80301268": "dab1e2a6f70bdccf6bc7e38e279876f0",
".git/objects/30/71cf92ef2343b288995af399834303aba0d868": "866e660fd402f923885a870cecf1b506",
".git/objects/35/d4a1bb99d5cbf0be26861951b62340d8a2df5c": "753d8a4f5ec7f79ce412f91a6dd3623d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3c/6a1b38e37e529e52dd1637c4aa24ddabd0f246": "3102dc4688542bb9b90e713150d78b90",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3d/c84c436b3c8fa649da30df908a512e8e30be72": "5b99f768e35fcb2ca59115c082639509",
".git/objects/3f/6a710773d8b88434f60c53adff672910d84315": "90337eb0f3f5afb3f526ab275112ea9b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/4061f5afd22c0dccae7faa625db30f6176f5d8": "64ce034f3d82bf6b4b8f5cd798d41bda",
".git/objects/42/949a0642784eca61a837ebc7f920ab5cc91eee": "c8be423bb666cf4ac407f557a93aa397",
".git/objects/43/fc8d4716474b8c108067190825228fbc4babc7": "ef16cc58eb250e6dbf3ed947047696ea",
".git/objects/44/8493bb2b823c9732fe4921200e4e4fe27f096c": "50a32b8fac274fb6f2f537033bba1c5f",
".git/objects/48/3637044cea3889bf599bf3fdf2b4402fef002f": "ea3ec949cc2773b99c79e427eacd8613",
".git/objects/48/4eb7c05c2ecca2fbee418a8d12e180debca519": "4a5c38fd0d6c71db7a5dcc455d11015d",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/a38c5790be14399c85f727cff7f5a3eaab18c1": "3362bd9e125e702c5b640d1f58ee4755",
".git/objects/49/dca0ddcf08fad00f793a389116ed1904d2ed9b": "91a120a1c6a917260e97d2e0c36f0cca",
".git/objects/4a/bf9e21933c7142ec7223815a34d88e6e536f54": "688f67f05d3318b9a662021d6c8658f2",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/53/53549b213e9215a337323de2b5424dca089049": "3e4808eeb61abc754e903e60030b8fde",
".git/objects/53/730b61514bdfcacc4ad2138425d7386d2080e8": "c5f94769c9b4dd78e0d7ea545d69d38a",
".git/objects/54/2351c9f12975b1bc679448924e7cd7d5b11664": "243f82003748e0fffcaff7ff4a190d57",
".git/objects/55/69a1f0664d1f32f0c5899cf9b01285208e87e1": "77ac1e14d0373c573ef2f4c215787878",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5c/9af55839feb67948bbd21380852b24a26b37d0": "1123377c8b29e29cb7d7bfa85715514d",
".git/objects/5d/342a7564d7460e7299bc4bee7014f58c1112fb": "d0ec7f836efe8e637b014d72bff9f715",
".git/objects/5e/019491fb1ddfc24939ac824e10b04b7f865474": "d800adf2f552bd45e4d97a3ddda3d78a",
".git/objects/65/c3ea765f878b5ade067bb4d6d41341a9c19a3b": "762ab4f77edd97747bd7dc08c9ad4b25",
".git/objects/6a/391853258d95715b85365ec3c04063fb7c34a2": "edb8ac5560c1ba938a2be9747fc87825",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/72d2b2a0e9a88288fafbba84dba1cb215d194a": "9b80ac5fb62ab12b3165aa63ff670c0d",
".git/objects/6c/500799a34cb21634ac42d7bf455c3a239cc441": "80122442dd7696b583b04104ae17a5b5",
".git/objects/6d/0f203de457dc2afa1b5c2ad2b161ec29b9fd33": "f7c53f1e7462ab8c7554e4f195ce3680",
".git/objects/6e/636caf2307e792fed71f3df88219ed03b41c1e": "da703858472f8826b121e099674c6e4b",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/6c0279285738e7554635276129cb41ba05dd92": "e601e68c8c78ed3bc4cc2ad970582769",
".git/objects/77/fcfac44d898301095a9453f9f32b0975e04296": "24f011f85f02887698f5fa703df215f1",
".git/objects/7b/79e8f1864a6a47b578a7350ec3f0c49c7ca44e": "b65e5f316fda02a291f338189b2e5cd9",
".git/objects/7c/c785ec81cb76ba3efc2f8a6a766d188d099936": "690d160fe64e7c33f13da6c115eeac00",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/82/50274e29b2f6e2261022e30bdc2068c0886818": "0d005429ef71e59223b96a59968c80e0",
".git/objects/82/51ab9c48ba9f500dcad9765dcfa4b2d7e0c74c": "881e7f5676e806113c5d48cac3120a09",
".git/objects/84/301a36dbd19f8c454f45f696a74bd27f760ed3": "b51e16172d6784a1ceb8c8c4b039698d",
".git/objects/85/043562a58ec563420cc3d274258c6351518099": "436909fd1e0d0a2fbe0732b6cc8b1abb",
".git/objects/86/a238df40ed07ab98004a5f245e26c1cb006f0c": "1122aea71a211a9785bdfcfc6e6eb4db",
".git/objects/87/8a6e3453f0bd6a3802ef02bfafbf63362180f9": "357474bc1221661fb62f2fda8fb860fd",
".git/objects/89/8b1ac7a4010c46de39a76998b9d5208c33d1c6": "6a515814cacbc1209f07829e2fd06a88",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/c86ba0ed333a239a45a507959903540f94e960": "b6cb2e784035956e587878d9e1decc30",
".git/objects/95/9d13d9a1d8b49180adaacd07383f7a8a1412c1": "018ca29d620e0fc94f26b9647fa8e3b1",
".git/objects/96/f23045ad8a3113c8cb89c740d8e213317d03b2": "f34192f1ea6fc95bdaead7a947a0478c",
".git/objects/98/7ef0185b2fd16da3218c87aa57b277f12454f3": "b62e3a1b8ccdcc750434963eee14d63e",
".git/objects/99/268083656ebb94ade86fa4454d9340289d8dcb": "e87b4a750e7dba05a5ea3f10f99351a9",
".git/objects/9e/ff3d6e6620db0fb0da76cb1641b3cbe6ad468c": "9da45f2a8afae400f5f4ffb360ed63c0",
".git/objects/9f/865e9ed611813834c013222f03f1e7123feb21": "b4c30db7656ca1f31e53311c0ffec712",
".git/objects/a2/b29a8f369860de238359c757976c6d5b227e9f": "dc8768361f54905876a2d69b0e1a4da9",
".git/objects/a2/ecbac48c7f643c73a97c801d0f5ac958c9913f": "a577b54b0d6047ab8378673e487d9947",
".git/objects/a4/3f8b2b02190f57fa8ac56a1b9112d7abf9d050": "0d7538d4e8bc2f0f9f7464e6b1ce0805",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a6/236294ce1ba8b5bdd7b065da188333aac5f047": "abe25ae7abac6afdd483df25b7235e84",
".git/objects/a6/2e09202a67f337625911782d8651cec70ace5b": "6d6596fbb3f8669ab05b8bccaa52ee77",
".git/objects/a9/9c4a8c434ee3c07a1957cf790639e990b64e53": "c1be44e08cc38c98e3784921be878e8f",
".git/objects/a9/a07e67f3c970cfa3a15fe6c4975b41fcf35b9f": "bea23d0f529003c292433207dc4442f8",
".git/objects/ae/8aeb0079783a98048a09983f533ae32ca03266": "a93f662ea5a3308c83f7a63d7e0cf131",
".git/objects/af/b4b8b173a767f737d7ca48f14aa2463f090703": "566be32eb1238db556a2dbba3d9846af",
".git/objects/b0/429bae827d488a9a8c6c8d110a611bfa67133a": "ae62558e6ad57f7cb1587b99f02945cf",
".git/objects/b1/82d534d50147e6411ec71888236fe4ac300b0b": "5f7c678b5a4e417ea068080c801c8844",
".git/objects/b2/9f34c90d143e0588fa5bd26dbf696b607c64b8": "9f31d9dbfd0a67a30013d96724ddc301",
".git/objects/b4/a4b406b3ade1254103704a7e740edef1cf129e": "c38761ba8afcca6aa2ee38f36dc404e0",
".git/objects/b4/c8187201edc369e43f79f24b00278439fe225b": "04ed6b14605ee7399e3ed44869ee9ff9",
".git/objects/b7/45b3ead4268f5c329f08b960e0fcb01595a91f": "38061f15cb52d5ffb6a1c418a5163fa1",
".git/objects/bc/76386ba4a868dfb861edd10b0065a3fa906ba7": "6ef390fd4784eba49f413d60f2d36159",
".git/objects/bd/708edff78b46b0c69af220ddaee8ddf1ff8016": "d786b095caf0eb08fd6eba0d3ebac5ca",
".git/objects/be/6ce9eec32a35b28fca6a9f03713c5806d97487": "79ad57965c9cb6e588c625d12afff917",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c3/252a8c98672e7134da25b19ff949dbcd26a9a0": "445fe392bd5a1bb7b4b58a098db21f64",
".git/objects/c3/96e329ffb8ea31be293106453bbd1dc3293f9f": "84fe6b092db04cd2af2e63b0c9cc9eb2",
".git/objects/c5/5117af5a76799a768c1cbb273c86aee182664c": "bd48103b23adf3df12a2ae365dafac56",
".git/objects/c5/f58d2c4501cde3ede351d1a98fe7eb4971b572": "e03e79b23aba4e74c057b36254616d7c",
".git/objects/c7/b1c934acad18591d62c8bcce8435dcbf5f3b31": "0fd537576e958718c3d39094c1abd235",
".git/objects/c7/bc352501fbce1a7ba085b5869243aba09313fb": "87d09411eaa4bb821465eb31c47fe7b6",
".git/objects/cb/925bc5936ce58964a5ca0a8e921bb873f15e14": "30cec770427b80764cf47c46c7b1ff1f",
".git/objects/cc/d4cd552f1657b218716e73b5962ccc37181c37": "aea54239cb59bae660557e9bdabbfa4a",
".git/objects/d1/ec35715d398cb0c02eda4c542571495050ac4b": "294f2490a06166efafd0aad3bfef2133",
".git/objects/d5/e40352c22cc654d776ae3f0d1d9f1d3c443c38": "d31ece8bf57c24c4c58778696e203f5c",
".git/objects/d6/abfdbea0d9c7bf23f08ff155bdf29f4bc43351": "a2ddb9d744ebac5c96f0c8efb4a5dc82",
".git/objects/da/d826ab185acd379634b5127a166fbc91b8f023": "887b56470e3f8bd7cf2a32dec09c5844",
".git/objects/db/0d762f2c8f7071da6b5dd546e9b0c2fa084a2d": "aef509fa3051a232289fc10456ddf6be",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/eb/76f179bd7ef6b99829d8a400e14238e108096a": "652513df20681cb819958452fc324513",
".git/objects/eb/905277ff5f2a122055e2fad3a9375b22714b67": "46e4f62f94e63da586f30afbe13fdca0",
".git/objects/ec/5347a8af48e027a77a446a285c6221eb53e04b": "b775187ef797e89932b1802e846c0da4",
".git/objects/ed/517a2ddf4e6632cbd682a3fb035582dc41eb5a": "ffdc56252d2d9bf24150e22392060219",
".git/objects/ed/b2fcb26acabc88ad1c81885e4192eeed2c909b": "8f033149042f4491a9550c98998460e8",
".git/objects/ee/fa6c76715e13bf34b15fdeae1c809b936a338d": "03e05e36cb7d65abd348a38b860e8f29",
".git/objects/ef/e2e8855337d8f9bfac716225af9ed90731f060": "ba36744259217bdb6defb08da28fbc68",
".git/objects/f0/0a50a0ad4e5defe6e1bc477559f262ce090242": "08e4a5d86f8cd932d0dff90e5138c506",
".git/objects/f1/3f8aeec5c72ebef169eac1d37341a6efdb6c94": "770d9cfb917bace1427a769cc54fb39e",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f8/38dd57b1d37eb46e7983d2a04e471ade8daf65": "233daa0d2edb9fcc1fdab1b4d5f3b81f",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/objects/ff/1f3fab59c0a4e89b4d6a07a9ea9c50e2734923": "b4bfbae802355ca87ef5fd97b95e359a",
".git/objects/pack/pack-62b3e22c962d1debc015ef215648e635e930f147.idx": "b74e08482c25ce07e39185c34ca6112e",
".git/objects/pack/pack-62b3e22c962d1debc015ef215648e635e930f147.pack": "4d0f49bc1e6d71a535257e23604321f4",
".git/ORIG_HEAD": "8d72a45a0ead90cd2623135e00c85d8d",
".git/packed-refs": "e2a4804b5d5c896072a7ae600acceb29",
".git/refs/heads/main": "b69901dcc1f95f1454fac69beb5f46aa",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5e8e848e73af11780aff277195489242",
"assets/AssetManifest.json": "cb1b2972e937da4957c4488789da75c9",
"assets/assets/jsondatabase/author_data.json": "2f79230df5f118b3c7bdcaa136394d40",
"assets/assets/jsondatabase/book_data.json": "71e8593443e16531bd5fdda51e5f4c51",
"assets/assets/jsondatabase/customer_data.json": "ab662055049d7ffff91db0a555da2f9f",
"assets/assets/jsondatabase/employee_data.json": "df5950770ed772c625add9bb274c032b",
"assets/assets/jsondatabase/order_data.json": "b55926a079573118e58c30feb04857a4",
"assets/assets/jsondatabase/sales_record_data.json": "47b3a0668402bd3d176883ec8907fd04",
"assets/assets/Logo/logo_dark.png": "d210c4dc9c679d70e04bfd8646795133",
"assets/assets/Logo/logo_light.png": "4de5ef5a479d7c9cce8255a3c83b05b2",
"assets/assets/Logo/logo_only.png": "a22466ae71d45f7e79b1a45bb7ba2938",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b6ea4c08e777a258a111dba76b6054ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"build": "32ea52d58bdd8f4c618943c451bff9ac",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "f5f73fef72e65a4542fa881499a6a523",
"icons/Icon-512.png": "dd52ebcd668814eafce400a7e1a9517c",
"icons/Icon-maskable-192.png": "f5f73fef72e65a4542fa881499a6a523",
"icons/Icon-maskable-512.png": "dd52ebcd668814eafce400a7e1a9517c",
"index.html": "a3b8fba22ecf8efa7525501228561b44",
"/": "a3b8fba22ecf8efa7525501228561b44",
"main.dart.js": "5c5da856996fef7cd00bd50360d77cdc",
"manifest.json": "0348b85c6fac00779e8fbd0362bbf158",
"README.md": "319c1ed846a65ad0656a8b3829ecb46f",
"version.json": "7be7591da0faf85f3eb3bf127953de09"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
