// Масив красивих градієнтів
const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
        'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
        'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
        'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
        'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
        'linear-gradient(135deg, #c918f4 0%, #54f06d 100%)',
        'linear-gradient(135deg, #85e3e7 0%, #a73d0d 100%)',
        'linear-gradient(135deg, #0a26b2 0%, #4eccdb 100%)',
        'linear-gradient(135deg, #631c43 0%, #74b055 100%)',
        'linear-gradient(135deg, #25d654 0%, #52b5fc 100%)',
        'linear-gradient(135deg, #f7773c 0%, #fa93f8 100%)',
        'linear-gradient(135deg, #330174 0%, #bb5b22 100%)',
        'linear-gradient(135deg, #2f7a92 0%, #ad03c0 100%)',
        'linear-gradient(135deg, #a468c9 0%, #c1a310 100%)',
        'linear-gradient(135deg, #d18790 0%, #5dc58f 100%)',
        'linear-gradient(135deg, #58343f 0%, #2eba23 100%)',
        'linear-gradient(135deg, #b351b7 0%, #d83fe9 100%)',
        'linear-gradient(135deg, #2af01d 0%, #755966 100%)',
        'linear-gradient(135deg, #7c2568 0%, #94c2f8 100%)',
        'linear-gradient(135deg, #f45524 0%, #94ceb1 100%)',
        'linear-gradient(135deg, #065ee9 0%, #390798 100%)',
        'linear-gradient(135deg, #54c2cd 0%, #fd5177 100%)',
        'linear-gradient(135deg, #adf2d2 0%, #b8ce89 100%)',
        'linear-gradient(135deg, #f762f2 0%, #e3be2f 100%)',
        'linear-gradient(135deg, #5f71bf 0%, #1ca677 100%)',
        'linear-gradient(135deg, #4ffd5f 0%, #d8b09a 100%)',
        'linear-gradient(135deg, #8e32e7 0%, #cc3cc9 100%)',
        'linear-gradient(135deg, #a6a339 0%, #b1d1d9 100%)',
        'linear-gradient(135deg, #da4a23 0%, #dfd673 100%)',
        'linear-gradient(135deg, #5032f5 0%, #039e5f 100%)',
        'linear-gradient(135deg, #f4a791 0%, #c4ec17 100%)',
        'linear-gradient(135deg, #01fbb5 0%, #5ab0cc 100%)',
        'linear-gradient(135deg, #257fbd 0%, #caa1a8 100%)',
        'linear-gradient(135deg, #d749df 0%, #16ce3f 100%)',
        'linear-gradient(135deg, #3dc039 0%, #629ece 100%)',
        'linear-gradient(135deg, #82b2c8 0%, #b35dc3 100%)',
        'linear-gradient(135deg, #e8f704 0%, #ca9a04 100%)',
        'linear-gradient(135deg, #9b2136 0%, #21788d 100%)',
        'linear-gradient(135deg, #a5aa46 0%, #822fbc 100%)',
        'linear-gradient(135deg, #d9807c 0%, #fd470a 100%)',
        'linear-gradient(135deg, #67938c 0%, #f80cb7 100%)',
        'linear-gradient(135deg, #ba08c7 0%, #23de8a 100%)',
        'linear-gradient(135deg, #948e21 0%, #78e8ca 100%)',
        'linear-gradient(135deg, #ed8350 0%, #cb595c 100%)',
        'linear-gradient(135deg, #1073d9 0%, #bec98e 100%)',
        'linear-gradient(135deg, #64753a 0%, #cfc972 100%)',
        'linear-gradient(135deg, #76e0f8 0%, #7a9202 100%)',
        'linear-gradient(135deg, #aac3e1 0%, #4d5bca 100%)',
        'linear-gradient(135deg, #8ef716 0%, #5826e6 100%)',
        'linear-gradient(135deg, #d8410c 0%, #8dfc8c 100%)',
        'linear-gradient(135deg, #79fef3 0%, #4488c4 100%)',
        'linear-gradient(135deg, #1c56be 0%, #c8b4c0 100%)',
        'linear-gradient(135deg, #c732ff 0%, #46a92a 100%)',
        'linear-gradient(135deg, #9d23ec 0%, #dbe549 100%)',
        'linear-gradient(135deg, #0ae3e5 0%, #70ebc1 100%)',
        'linear-gradient(135deg, #db977c 0%, #fa8152 100%)',
        'linear-gradient(135deg, #2b34a0 0%, #246ac4 100%)',
        'linear-gradient(135deg, #b3c915 0%, #fd0c7b 100%)',
        'linear-gradient(135deg, #7f1a8d 0%, #07ae22 100%)',
        'linear-gradient(135deg, #e7189a 0%, #60e96d 100%)',
        'linear-gradient(135deg, #31f830 0%, #2a1316 100%)',
        'linear-gradient(135deg, #f38e05 0%, #e13d35 100%)',
        'linear-gradient(135deg, #10a00c 0%, #7a50cc 100%)',
        'linear-gradient(135deg, #1826ce 0%, #5b5391 100%)',
        'linear-gradient(135deg, #31f411 0%, #2ac7ee 100%)',
        'linear-gradient(135deg, #6f573f 0%, #dc6aac 100%)',
        'linear-gradient(135deg, #2e7b3e 0%, #feb8fd 100%)',
        'linear-gradient(135deg, #6be53d 0%, #2f6f20 100%)',
        'linear-gradient(135deg, #5ca273 0%, #b9a1ec 100%)',
        'linear-gradient(135deg, #f008c2 0%, #447aaf 100%)',
        'linear-gradient(135deg, #572479 0%, #052cca 100%)',
        'linear-gradient(135deg, #1040b4 0%, #918138 100%)',
        'linear-gradient(135deg, #804270 0%, #72f300 100%)',
        'linear-gradient(135deg, #90828d 0%, #53c32f 100%)',
        'linear-gradient(135deg, #2c78fd 0%, #0a89e9 100%)',
        'linear-gradient(135deg, #c7487d 0%, #8351e2 100%)',
        'linear-gradient(135deg, #c71390 0%, #fc5af0 100%)',
        'linear-gradient(135deg, #349c95 0%, #6beafc 100%)',
        'linear-gradient(135deg, #6a868e 0%, #995dac 100%)',
        'linear-gradient(135deg, #541fa6 0%, #3ee33f 100%)',
        'linear-gradient(135deg, #3618ab 0%, #5aa775 100%)',
        'linear-gradient(135deg, #113456 0%, #e4bd60 100%)',
        'linear-gradient(135deg, #ed2e36 0%, #a9a574 100%)',
        'linear-gradient(135deg, #7522b7 0%, #cffa5b 100%)',
        'linear-gradient(135deg, #d5fa9e 0%, #b3fd40 100%)',
        'linear-gradient(135deg, #3f37d4 0%, #c797ba 100%)',
        'linear-gradient(135deg, #5019ce 0%, #3aa8f2 100%)',
        'linear-gradient(135deg, #57e259 0%, #d3d59b 100%)',
        'linear-gradient(135deg, #d685f5 0%, #2086a8 100%)',
        'linear-gradient(135deg, #b1b6ea 0%, #17be11 100%)',
        'linear-gradient(135deg, #884809 0%, #26dd5d 100%)',
        'linear-gradient(135deg, #b3a82a 0%, #09d8be 100%)',
        'linear-gradient(135deg, #360aa8 0%, #a9be94 100%)',
        'linear-gradient(135deg, #b4d3fa 0%, #4184c0 100%)',
        'linear-gradient(135deg, #899247 0%, #1d6128 100%)',
        'linear-gradient(135deg, #bd97bd 0%, #c70831 100%)',
        'linear-gradient(135deg, #caffdd 0%, #44ff6c 100%)',
        'linear-gradient(135deg, #3bd6e0 0%, #1a839c 100%)',
        'linear-gradient(135deg, #f2c21f 0%, #11a0e9 100%)',
        'linear-gradient(135deg, #0ad999 0%, #57f8be 100%)',
        'linear-gradient(135deg, #261c5c 0%, #127884 100%)',
        'linear-gradient(135deg, #29f049 0%, #23b3a9 100%)',
        'linear-gradient(135deg, #71b700 0%, #5deb9c 100%)',
        'linear-gradient(135deg, #869948 0%, #8d1f9a 100%)',
        'linear-gradient(135deg, #e9cb20 0%, #279a24 100%)',
        'linear-gradient(135deg, #92b2ae 0%, #68d3f1 100%)',
        'linear-gradient(135deg, #61c028 0%, #ec48c1 100%)',
        'linear-gradient(135deg, #dcc9c5 0%, #97cd55 100%)',
        'linear-gradient(135deg, #e27a2c 0%, #fae2a5 100%)',
        'linear-gradient(135deg, #091238 0%, #68e381 100%)',
        'linear-gradient(135deg, #5e219d 0%, #15d11b 100%)',
        'linear-gradient(135deg, #af61d5 0%, #4f53e0 100%)',
        'linear-gradient(135deg, #05cd5c 0%, #c0b4c9 100%)',
        'linear-gradient(135deg, #132a06 0%, #78c0b1 100%)',
        'linear-gradient(135deg, #a3b962 0%, #a9192e 100%)',
        'linear-gradient(135deg, #85c1f9 0%, #672a93 100%)',
        'linear-gradient(135deg, #af0dbf 0%, #da0de5 100%)',
        'linear-gradient(135deg, #6fc026 0%, #198601 100%)',
        'linear-gradient(135deg, #cefc3f 0%, #dbddb6 100%)',
        'linear-gradient(135deg, #eabf90 0%, #d8033a 100%)',
        'linear-gradient(135deg, #869d4c 0%, #7cefea 100%)',
        'linear-gradient(135deg, #84929c 0%, #cb30ff 100%)',
        'linear-gradient(135deg, #fb05ca 0%, #ca4beb 100%)',
        'linear-gradient(135deg, #561627 0%, #c392af 100%)',
        'linear-gradient(135deg, #8a8089 0%, #f61381 100%)',
        'linear-gradient(135deg, #7fce9f 0%, #065dc1 100%)',
        'linear-gradient(135deg, #431f22 0%, #4bb5e1 100%)',
        'linear-gradient(135deg, #daaaf2 0%, #67c02b 100%)',
        'linear-gradient(135deg, #3e1192 0%, #aa10f9 100%)',
        'linear-gradient(135deg, #54ca55 0%, #d79fdc 100%)',
        'linear-gradient(135deg, #e1011d 0%, #96f523 100%)',
        'linear-gradient(135deg, #f43da6 0%, #3c7b38 100%)',
        'linear-gradient(135deg, #ab91d1 0%, #50761e 100%)',
        'linear-gradient(135deg, #b3c63a 0%, #aaea31 100%)',
        'linear-gradient(135deg, #7280e6 0%, #af119e 100%)',
        'linear-gradient(135deg, #9234ad 0%, #2a271e 100%)',
        'linear-gradient(135deg, #838870 0%, #0cc5d5 100%)',
        'linear-gradient(135deg, #8a2515 0%, #8d436e 100%)',
        'linear-gradient(135deg, #2bec6a 0%, #0b162d 100%)',
        'linear-gradient(135deg, #e6f0e7 0%, #9a869c 100%)',
        'linear-gradient(135deg, #e43ee3 0%, #9d8d7d 100%)',
        'linear-gradient(135deg, #793f1e 0%, #78a765 100%)',
        'linear-gradient(135deg, #fbda5c 0%, #5906e1 100%)',
        'linear-gradient(135deg, #67e0e6 0%, #58b5dc 100%)',
        'linear-gradient(135deg, #ab274d 0%, #c9b3d1 100%)',
        'linear-gradient(135deg, #86d778 0%, #d32d9b 100%)',
        'linear-gradient(135deg, #a2b2cc 0%, #f1e4de 100%)',
        'linear-gradient(135deg, #3311e2 0%, #f77b52 100%)',
        'linear-gradient(135deg, #a000f6 0%, #441393 100%)',
        'linear-gradient(135deg, #2a3d9b 0%, #b881cd 100%)',
        'linear-gradient(135deg, #1e9592 0%, #a01e91 100%)',
        'linear-gradient(135deg, #5a519d 0%, #e8376a 100%)',
        'linear-gradient(135deg, #830ff0 0%, #b7fe58 100%)',
        'linear-gradient(135deg, #ac93c7 0%, #9bbe89 100%)',
        'linear-gradient(135deg, #fc7ebc 0%, #c12a1a 100%)',
        'linear-gradient(135deg, #04615a 0%, #6d081a 100%)',
        'linear-gradient(135deg, #bb0083 0%, #f66006 100%)',
        'linear-gradient(135deg, #63f6e9 0%, #8c0420 100%)',
        'linear-gradient(135deg, #dfa932 0%, #b54201 100%)',
        'linear-gradient(135deg, #4555f9 0%, #5528d2 100%)',
        'linear-gradient(135deg, #d447d9 0%, #d38a65 100%)',
        'linear-gradient(135deg, #3ac150 0%, #58a57a 100%)',
        'linear-gradient(135deg, #42e1fb 0%, #ffd1de 100%)',
        'linear-gradient(135deg, #975180 0%, #06b7b0 100%)',
        'linear-gradient(135deg, #e7fae4 0%, #8be8f3 100%)',
        'linear-gradient(135deg, #5a45ec 0%, #6fabba 100%)',
        'linear-gradient(135deg, #1b184a 0%, #4fb7ce 100%)',
        'linear-gradient(135deg, #f700ab 0%, #696309 100%)',
        'linear-gradient(135deg, #c6eb19 0%, #e69e88 100%)',
        'linear-gradient(135deg, #090013 0%, #3da0fc 100%)',
        'linear-gradient(135deg, #e6d7b3 0%, #366f0d 100%)',
        'linear-gradient(135deg, #942b37 0%, #ffabde 100%)',
        'linear-gradient(135deg, #cbdfab 0%, #42f800 100%)',
        'linear-gradient(135deg, #1f947a 0%, #44c3b7 100%)',
        'linear-gradient(135deg, #9bb558 0%, #66ba90 100%)',
        'linear-gradient(135deg, #4dfbbe 0%, #cb4668 100%)',
        'linear-gradient(135deg, #a97168 0%, #e22886 100%)',
        'linear-gradient(135deg, #d6c3e9 0%, #52f481 100%)',
        'linear-gradient(135deg, #bdb512 0%, #051590 100%)',
        'linear-gradient(135deg, #b1ba1b 0%, #1fbb2f 100%)',
        'linear-gradient(135deg, #29b493 0%, #c9d6c6 100%)',
        'linear-gradient(135deg, #7f0c56 0%, #dc99a9 100%)',
        'linear-gradient(135deg, #7ab96f 0%, #39b339 100%)',
        'linear-gradient(135deg, #64cb4b 0%, #f4510c 100%)',
        'linear-gradient(135deg, #60629f 0%, #52759f 100%)',
        'linear-gradient(135deg, #45462e 0%, #259c2a 100%)',
        'linear-gradient(135deg, #93ca4f 0%, #142998 100%)',
        'linear-gradient(135deg, #e35f53 0%, #026386 100%)',
        'linear-gradient(135deg, #bb42e7 0%, #d3d41f 100%)',
        'linear-gradient(135deg, #906783 0%, #5517db 100%)',
        'linear-gradient(135deg, #c34828 0%, #04c9e5 100%)',
        'linear-gradient(135deg, #63e62e 0%, #352a2b 100%)',
        'linear-gradient(135deg, #c4f4bb 0%, #9beeb9 100%)',
        'linear-gradient(135deg, #8e74bb 0%, #b29162 100%)',
        'linear-gradient(135deg, #4bd516 0%, #033755 100%)',
        'linear-gradient(135deg, #f27b1b 0%, #2d6376 100%)',
        'linear-gradient(135deg, #4b2258 0%, #e91930 100%)',
        'linear-gradient(135deg, #7c6499 0%, #50c65c 100%)',
        'linear-gradient(135deg, #d8d0d2 0%, #974394 100%)',
        'linear-gradient(135deg, #2d359c 0%, #7a1af9 100%)',
        'linear-gradient(135deg, #beeb42 0%, #b8b830 100%)',
        'linear-gradient(135deg, #de56c4 0%, #f562e9 100%)',
        'linear-gradient(135deg, #99e410 0%, #c7855f 100%)',
        'linear-gradient(135deg, #10e2b9 0%, #2ba185 100%)',
        'linear-gradient(135deg, #58e2bf 0%, #d9ea2d 100%)',
        'linear-gradient(135deg, #02a7d1 0%, #a2437d 100%)',
        'linear-gradient(135deg, #2fc026 0%, #5e3825 100%)',
        'linear-gradient(135deg, #46da22 0%, #20b047 100%)',
        'linear-gradient(135deg, #541e68 0%, #0848d6 100%)',
        'linear-gradient(135deg, #366791 0%, #27d85a 100%)',
        'linear-gradient(135deg, #622b37 0%, #a77282 100%)',
        'linear-gradient(135deg, #07864b 0%, #572913 100%)',
        'linear-gradient(135deg, #7d9b17 0%, #2beafb 100%)',
        'linear-gradient(135deg, #902439 0%, #632757 100%)',
        'linear-gradient(135deg, #85f613 0%, #745d50 100%)',
        'linear-gradient(135deg, #37c07e 0%, #27729b 100%)',
        'linear-gradient(135deg, #8109ba 0%, #b3084d 100%)',
        'linear-gradient(135deg, #ed6f57 0%, #6e1fbb 100%)',
        'linear-gradient(135deg, #52d192 0%, #b3148d 100%)',
        'linear-gradient(135deg, #b5ca28 0%, #8fe2ca 100%)',
        'linear-gradient(135deg, #3567b7 0%, #c756a7 100%)',
        'linear-gradient(135deg, #cbc2fa 0%, #e418dd 100%)',
        'linear-gradient(135deg, #e13203 0%, #eb37c4 100%)',
        'linear-gradient(135deg, #55a07c 0%, #925c8b 100%)',
        'linear-gradient(135deg, #a1a6c9 0%, #ad73ea 100%)',
        'linear-gradient(135deg, #fd221f 0%, #7352e8 100%)',
        'linear-gradient(135deg, #66fb51 0%, #961d26 100%)',
        'linear-gradient(135deg, #b716d4 0%, #193aca 100%)',
        'linear-gradient(135deg, #062a34 0%, #aaa545 100%)',
        'linear-gradient(135deg, #c27096 0%, #9503b8 100%)',
        'linear-gradient(135deg, #dc4c9d 0%, #c951ff 100%)',
        'linear-gradient(135deg, #47bf3c 0%, #50094e 100%)',
        'linear-gradient(135deg, #bc048d 0%, #c7db1b 100%)',
        'linear-gradient(135deg, #4dc1af 0%, #0d1df4 100%)',
        'linear-gradient(135deg, #2d4815 0%, #d239e8 100%)',
        'linear-gradient(135deg, #c71075 0%, #c5cf74 100%)',
        'linear-gradient(135deg, #0b2712 0%, #ac54c2 100%)',
        'linear-gradient(135deg, #71faaf 0%, #81e140 100%)',
        'linear-gradient(135deg, #461f90 0%, #0e9eb3 100%)',
        'linear-gradient(135deg, #18da54 0%, #cf1e21 100%)',
        'linear-gradient(135deg, #b6bbdc 0%, #b49121 100%)',
        'linear-gradient(135deg, #4df18e 0%, #1e70a2 100%)',
        'linear-gradient(135deg, #2b786b 0%, #1a38a5 100%)',
        'linear-gradient(135deg, #646ef6 0%, #dc043d 100%)',
        'linear-gradient(135deg, #30343f 0%, #11249e 100%)',
        'linear-gradient(135deg, #b85715 0%, #ba12b1 100%)',
        'linear-gradient(135deg, #e2824e 0%, #653471 100%)',
        'linear-gradient(135deg, #e34e0e 0%, #44292f 100%)',
        'linear-gradient(135deg, #11f596 0%, #a1a9ec 100%)',
        'linear-gradient(135deg, #862cbe 0%, #4728f2 100%)',
        'linear-gradient(135deg, #fed0e8 0%, #2b2890 100%)',
        'linear-gradient(135deg, #85bf53 0%, #f9b1bf 100%)',
        'linear-gradient(135deg, #49ff22 0%, #f4fa8e 100%)',
        'linear-gradient(135deg, #ac1d38 0%, #a4bfcd 100%)',
        'linear-gradient(135deg, #3983be 0%, #589ee8 100%)',
        'linear-gradient(135deg, #4b2136 0%, #33fc33 100%)',
        'linear-gradient(135deg, #c627d2 0%, #fd6b91 100%)',
        'linear-gradient(135deg, #41bc04 0%, #3ca65c 100%)',
        'linear-gradient(135deg, #559d1a 0%, #189056 100%)',
        'linear-gradient(135deg, #732bfc 0%, #c432a0 100%)',
        'linear-gradient(135deg, #44a3c6 0%, #317392 100%)',
        'linear-gradient(135deg, #1e323b 0%, #ee355c 100%)',
        'linear-gradient(135deg, #36d91f 0%, #a7b803 100%)',
        'linear-gradient(135deg, #94e76a 0%, #4cc3e6 100%)',
        'linear-gradient(135deg, #dbfc48 0%, #ac7722 100%)',
        'linear-gradient(135deg, #37a73a 0%, #13e651 100%)',
        'linear-gradient(135deg, #18ff10 0%, #c56bad 100%)',
        'linear-gradient(135deg, #06b383 0%, #ac7cfe 100%)',
        'linear-gradient(135deg, #966d24 0%, #2924db 100%)',
        'linear-gradient(135deg, #3ad2a1 0%, #a08eec 100%)',
        'linear-gradient(135deg, #65a6fb 0%, #e2585d 100%)',
        'linear-gradient(135deg, #43ba66 0%, #3803f5 100%)',
        'linear-gradient(135deg, #b0ea0c 0%, #d60c80 100%)',
        'linear-gradient(135deg, #c46c5a 0%, #0f7f41 100%)',
        'linear-gradient(135deg, #d1f1fd 0%, #8e8930 100%)',
        'linear-gradient(135deg, #5d6f53 0%, #068058 100%)',
        'linear-gradient(135deg, #359522 0%, #64f3a2 100%)',
        'linear-gradient(135deg, #e853b5 0%, #dd8ad3 100%)',
        'linear-gradient(135deg, #80139c 0%, #3d9472 100%)',
        'linear-gradient(135deg, #58635f 0%, #1c07d6 100%)',
        'linear-gradient(135deg, #e554cb 0%, #5a7102 100%)',
        'linear-gradient(135deg, #7e0f69 0%, #144f11 100%)',
        'linear-gradient(135deg, #e15f3e 0%, #e30ebd 100%)',
        'linear-gradient(135deg, #65096e 0%, #d079dc 100%)',
        'linear-gradient(135deg, #ce5861 0%, #f317b7 100%)',
        'linear-gradient(135deg, #315658 0%, #e51cec 100%)',
        'linear-gradient(135deg, #e71a33 0%, #aefaf6 100%)',
        'linear-gradient(135deg, #548d20 0%, #a24598 100%)',
        'linear-gradient(135deg, #6a1b91 0%, #131639 100%)',
        'linear-gradient(135deg, #74a116 0%, #1f816b 100%)',
        'linear-gradient(135deg, #655249 0%, #f0d930 100%)',
        'linear-gradient(135deg, #0863db 0%, #89dedb 100%)',
        'linear-gradient(135deg, #e894c3 0%, #1e5b5f 100%)',
        'linear-gradient(135deg, #8c86de 0%, #be7e35 100%)',
        'linear-gradient(135deg, #b7ed82 0%, #9856f6 100%)',
        'linear-gradient(135deg, #9539e1 0%, #19670e 100%)',
        'linear-gradient(135deg, #756271 0%, #0a6938 100%)',
        'linear-gradient(135deg, #25a29c 0%, #5e62e7 100%)',
        'linear-gradient(135deg, #980a66 0%, #faba9a 100%)',
        'linear-gradient(135deg, #88722d 0%, #81e822 100%)',
        'linear-gradient(135deg, #7b67ab 0%, #07f6d0 100%)',
        'linear-gradient(135deg, #39eb29 0%, #0e2c73 100%)',
        'linear-gradient(135deg, #a3a5a2 0%, #f92b39 100%)',
        'linear-gradient(135deg, #dd5782 0%, #a22d81 100%)',
        'linear-gradient(135deg, #c19a38 0%, #b550ad 100%)',
        'linear-gradient(135deg, #529776 0%, #d115a3 100%)',
        'linear-gradient(135deg, #5843d4 0%, #4cc289 100%)',
        'linear-gradient(135deg, #20941b 0%, #87eea3 100%)',
        'linear-gradient(135deg, #a0e2d6 0%, #4d2084 100%)',
        'linear-gradient(135deg, #aea3d3 0%, #3a7ee8 100%)',
        'linear-gradient(135deg, #3b1f50 0%, #bab3b0 100%)',
        'linear-gradient(135deg, #e3a1c2 0%, #fb6954 100%)',
        'linear-gradient(135deg, #0fa294 0%, #8615d4 100%)',
        'linear-gradient(135deg, #530124 0%, #541883 100%)',
        'linear-gradient(135deg, #25bd45 0%, #dcd6e3 100%)',
        'linear-gradient(135deg, #398655 0%, #fe2597 100%)',
        'linear-gradient(135deg, #4ed3b5 0%, #59df95 100%)',
        'linear-gradient(135deg, #8ae0ff 0%, #1ad7f4 100%)',
        'linear-gradient(135deg, #6d4836 0%, #65f794 100%)',
        'linear-gradient(135deg, #f2d9d0 0%, #915abb 100%)',
        'linear-gradient(135deg, #4acae4 0%, #6554e5 100%)',
        'linear-gradient(135deg, #86206d 0%, #eb2b48 100%)',
        'linear-gradient(135deg, #190246 0%, #d9db54 100%)',
        'linear-gradient(135deg, #fca8f8 0%, #63a72d 100%)',
        'linear-gradient(135deg, #ba51a7 0%, #07c86d 100%)',
        'linear-gradient(135deg, #382036 0%, #6da1d7 100%)',
        'linear-gradient(135deg, #107ddb 0%, #6aa52e 100%)',
        'linear-gradient(135deg, #7ce7fa 0%, #d5284b 100%)',
        'linear-gradient(135deg, #aab025 0%, #c5e14b 100%)',
        'linear-gradient(135deg, #23a778 0%, #304efc 100%)',
        'linear-gradient(135deg, #8019d5 0%, #bdee2f 100%)',
        'linear-gradient(135deg, #11d407 0%, #4f2902 100%)',
        'linear-gradient(135deg, #f44b2d 0%, #47ebc1 100%)',
        'linear-gradient(135deg, #2a7761 0%, #b55be8 100%)',
        'linear-gradient(135deg, #7548ed 0%, #04d716 100%)',
        'linear-gradient(135deg, #33380c 0%, #b5ec31 100%)',
        'linear-gradient(135deg, #38b532 0%, #ea0de6 100%)',
        'linear-gradient(135deg, #bf9a37 0%, #42819f 100%)',
        'linear-gradient(135deg, #eabc9c 0%, #86b4ea 100%)',
        'linear-gradient(135deg, #f1fd45 0%, #750f8c 100%)',
        'linear-gradient(135deg, #fa5a22 0%, #69618c 100%)',
        'linear-gradient(135deg, #9d686f 0%, #670b27 100%)',
        'linear-gradient(135deg, #aa4adf 0%, #361346 100%)',
        'linear-gradient(135deg, #86e973 0%, #c7f9cc 100%)',
        'linear-gradient(135deg, #6e21d2 0%, #6c92e9 100%)',
        'linear-gradient(135deg, #3e94cb 0%, #4af08c 100%)',
        'linear-gradient(135deg, #0c2aa4 0%, #9ac672 100%)',
        'linear-gradient(135deg, #edf420 0%, #9ba5b0 100%)',
        'linear-gradient(135deg, #e92bc5 0%, #c504e1 100%)',
        'linear-gradient(135deg, #ecf653 0%, #5ab8fd 100%)',
        'linear-gradient(135deg, #bb359a 0%, #2375e0 100%)',
        'linear-gradient(135deg, #07b85c 0%, #c502c1 100%)',
        'linear-gradient(135deg, #afebc4 0%, #b70d89 100%)',
        'linear-gradient(135deg, #3cd2cc 0%, #4279f7 100%)',
        'linear-gradient(135deg, #54d178 0%, #0065e4 100%)',
        'linear-gradient(135deg, #900c20 0%, #3e2110 100%)',
        'linear-gradient(135deg, #cb4530 0%, #6af7d0 100%)',
        'linear-gradient(135deg, #cdb3d6 0%, #7a45e7 100%)',
        'linear-gradient(135deg, #85eefa 0%, #a5284b 100%)',
        'linear-gradient(135deg, #2cdf00 0%, #8fac14 100%)',
        'linear-gradient(135deg, #20126b 0%, #679701 100%)',
        'linear-gradient(135deg, #e2b8ee 0%, #629c9f 100%)',
        'linear-gradient(135deg, #5fd432 0%, #d81add 100%)',
        'linear-gradient(135deg, #496bff 0%, #b5eed4 100%)',
        'linear-gradient(135deg, #0fa137 0%, #1fb778 100%)',
        'linear-gradient(135deg, #243b53 0%, #ab22a5 100%)',
        'linear-gradient(135deg, #4499cb 0%, #3a031e 100%)',
        'linear-gradient(135deg, #4bc2b4 0%, #f5a28f 100%)',
        'linear-gradient(135deg, #e28777 0%, #4385c2 100%)',
        'linear-gradient(135deg, #28718f 0%, #c4e67e 100%)',
        'linear-gradient(135deg, #a6deee 0%, #901377 100%)',
        'linear-gradient(135deg, #328cc7 0%, #f00994 100%)',
        'linear-gradient(135deg, #cf8e8f 0%, #3c7d5b 100%)',
        'linear-gradient(135deg, #d68299 0%, #0d4bec 100%)',
        'linear-gradient(135deg, #773d96 0%, #e270e7 100%)',
        'linear-gradient(135deg, #cc4908 0%, #864290 100%)',
        'linear-gradient(135deg, #719cd1 0%, #67f4d9 100%)',
        'linear-gradient(135deg, #4ccb77 0%, #c33590 100%)',
        'linear-gradient(135deg, #69a9a4 0%, #bf4b20 100%)',
        'linear-gradient(135deg, #1b6697 0%, #d3502c 100%)',
        'linear-gradient(135deg, #1c1d51 0%, #89ce30 100%)',
        'linear-gradient(135deg, #f153aa 0%, #eb1a24 100%)',
        'linear-gradient(135deg, #a7434e 0%, #32efdb 100%)',
        'linear-gradient(135deg, #c537dc 0%, #3d2e4d 100%)',
        'linear-gradient(135deg, #42110b 0%, #0bc60f 100%)',
        'linear-gradient(135deg, #ce0976 0%, #dc4a25 100%)',
        'linear-gradient(135deg, #0c63c0 0%, #a506e2 100%)',
        'linear-gradient(135deg, #87b2c4 0%, #6461fd 100%)',
        'linear-gradient(135deg, #cd981e 0%, #8ca09d 100%)',
        'linear-gradient(135deg, #d32c63 0%, #99c68b 100%)',
        'linear-gradient(135deg, #a37483 0%, #6c12df 100%)',
        'linear-gradient(135deg, #80923f 0%, #960259 100%)',
        'linear-gradient(135deg, #59f13b 0%, #a15cd6 100%)',
        'linear-gradient(135deg, #1324c2 0%, #147b05 100%)',
        'linear-gradient(135deg, #80b9dd 0%, #4a1b2c 100%)',
        'linear-gradient(135deg, #1edd56 0%, #a547a2 100%)',
        'linear-gradient(135deg, #428906 0%, #65278d 100%)',
        'linear-gradient(135deg, #0650be 0%, #ab19d7 100%)',
        'linear-gradient(135deg, #133069 0%, #a9782a 100%)',
        'linear-gradient(135deg, #51aaef 0%, #a6862f 100%)',
        'linear-gradient(135deg, #ca78d3 0%, #903e15 100%)',
        'linear-gradient(135deg, #32aed8 0%, #727c60 100%)',
        'linear-gradient(135deg, #62021e 0%, #af7ae2 100%)',
        'linear-gradient(135deg, #3cb11a 0%, #a87f5a 100%)',
        'linear-gradient(135deg, #c41edc 0%, #144a2a 100%)',
        'linear-gradient(135deg, #4f60eb 0%, #c35bc3 100%)',
        'linear-gradient(135deg, #9f3059 0%, #e923f9 100%)',
        'linear-gradient(135deg, #af26f9 0%, #35a54b 100%)',
        'linear-gradient(135deg, #bc9c22 0%, #431f82 100%)',
        'linear-gradient(135deg, #3792c9 0%, #656924 100%)',
        'linear-gradient(135deg, #dabfd0 0%, #d18f50 100%)',
        'linear-gradient(135deg, #7e50b7 0%, #2722ec 100%)',
        'linear-gradient(135deg, #61566f 0%, #9ae596 100%)',
        'linear-gradient(135deg, #7aa476 0%, #fa9591 100%)',
        'linear-gradient(135deg, #2d6578 0%, #310e3d 100%)',
        'linear-gradient(135deg, #6f0046 0%, #a179f5 100%)',
        'linear-gradient(135deg, #681edc 0%, #3c82e8 100%)',
        'linear-gradient(135deg, #81a80a 0%, #5ed9bd 100%)',
        'linear-gradient(135deg, #876f9c 0%, #c67613 100%)',
        'linear-gradient(135deg, #b4ac67 0%, #9fd9ce 100%)',
        'linear-gradient(135deg, #f7da3f 0%, #28f09f 100%)',
        'linear-gradient(135deg, #a4f0af 0%, #5d1de0 100%)',
        'linear-gradient(135deg, #c9a3c1 0%, #277738 100%)',
        'linear-gradient(135deg, #c898c8 0%, #5dffaa 100%)',
        'linear-gradient(135deg, #fd808a 0%, #54b624 100%)',
        'linear-gradient(135deg, #c4765b 0%, #5a027d 100%)',
        'linear-gradient(135deg, #f9518e 0%, #139a21 100%)',
        'linear-gradient(135deg, #6d6967 0%, #f34a6b 100%)',
        'linear-gradient(135deg, #f34c6c 0%, #583e6b 100%)',
        'linear-gradient(135deg, #7ba3d8 0%, #354312 100%)',
        'linear-gradient(135deg, #2d2627 0%, #26c204 100%)',
        'linear-gradient(135deg, #645d8c 0%, #70fa7a 100%)',
        'linear-gradient(135deg, #4fa909 0%, #33687d 100%)',
        'linear-gradient(135deg, #8e4053 0%, #87c53d 100%)',
        'linear-gradient(135deg, #18dfbe 0%, #1e8c28 100%)',
        'linear-gradient(135deg, #23ea9d 0%, #c31d11 100%)',
        'linear-gradient(135deg, #9c9745 0%, #08e3f3 100%)',
        'linear-gradient(135deg, #401382 0%, #7fcd15 100%)',
        'linear-gradient(135deg, #ddbff3 0%, #acbc50 100%)',
        'linear-gradient(135deg, #43b157 0%, #056959 100%)',
        'linear-gradient(135deg, #b3972a 0%, #44ea5b 100%)',
        'linear-gradient(135deg, #0e8ae3 0%, #016b9d 100%)',
        'linear-gradient(135deg, #8b66fc 0%, #ec9530 100%)',
        'linear-gradient(135deg, #8e21ec 0%, #ec7747 100%)',
        'linear-gradient(135deg, #9c316b 0%, #645fd9 100%)',
        'linear-gradient(135deg, #c63f07 0%, #4d5f41 100%)',
        'linear-gradient(135deg, #1b4111 0%, #feb91d 100%)',
        'linear-gradient(135deg, #5083bc 0%, #1b135b 100%)',
        'linear-gradient(135deg, #608bb7 0%, #0756a6 100%)',
        'linear-gradient(135deg, #2a1974 0%, #3e938e 100%)',
        'linear-gradient(135deg, #67b13b 0%, #67e929 100%)',
        'linear-gradient(135deg, #370ac2 0%, #e16daf 100%)',
        'linear-gradient(135deg, #6ee9d8 0%, #508566 100%)',
        'linear-gradient(135deg, #5d350d 0%, #ba878c 100%)',
        'linear-gradient(135deg, #a83350 0%, #f6714e 100%)',
        'linear-gradient(135deg, #1dd65f 0%, #041ccd 100%)',
        'linear-gradient(135deg, #307033 0%, #d0bbe4 100%)',
        'linear-gradient(135deg, #f359e8 0%, #af7976 100%)',
        'linear-gradient(135deg, #c8726a 0%, #eaeed9 100%)',
        'linear-gradient(135deg, #2817b2 0%, #be17f1 100%)',
        'linear-gradient(135deg, #246859 0%, #157e13 100%)',
        'linear-gradient(135deg, #1498b6 0%, #484aeb 100%)',
        'linear-gradient(135deg, #6f3e71 0%, #0e7e1d 100%)',
        'linear-gradient(135deg, #d06648 0%, #7ae1aa 100%)',
        'linear-gradient(135deg, #0f76cc 0%, #df0537 100%)'
    ];


// Функція для генерації рандомного градієнта
function generateRandomGradient() {
    return gradients[Math.floor(Math.random() * gradients.length)];
}

// Функція для генерації рандомного кольору
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Функція для створення кастомного градієнта
function generateCustomGradient() {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`;
}

// Функція для застосування градієнта до тексту та фону
function applyGradientToText(element, gradient) {
    // Застосовуємо градієнт до тексту
    element.style.background = gradient;
    element.style.webkitBackgroundClip = 'text';
    element.style.webkitTextFillColor = 'transparent';
    element.style.backgroundClip = 'text';
    element.style.backgroundSize = '200% 200%';
    element.style.animation = 'gradientShift 3s ease infinite';
    
    // Застосовуємо градієнт до фону сайту
    document.body.style.background = gradient;
    
    // Додаємо додатковий ефект для кращого контрасту
    const overlay = document.createElement('div');
    overlay.id = 'gradient-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${gradient};
        opacity: 0.3;
        z-index: -2;
        pointer-events: none;
    `;
    
    // Видаляємо попередній overlay якщо він є
    const existingOverlay = document.getElementById('gradient-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }
    
    document.body.appendChild(overlay);
    
    // Додаємо анімацію появи
    setTimeout(() => {
        overlay.style.transition = 'opacity 0.5s ease';
        overlay.style.opacity = '0.3';
    }, 10);
}

// Зберігаємо оригінальний фон
const originalBackground = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)';

// Функція для показу повідомлення
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = message;
    notification.classList.add('show');
    
    // Автоматично приховуємо через 3 секунди
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Функція для повернення до оригінального фону
function resetBackground() {
    document.body.style.background = originalBackground;
    const overlay = document.getElementById('gradient-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
        }, 500);
    }
}

// Функція для копіювання CSS коду
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('CSS code copied!');
    }).catch(() => {
        showNotification('Copy error', 'error');
    });
}

// Функція для створення картки градієнта
function createGradientCard(gradient) {
    const card = document.createElement('div');
    card.className = 'gradient-card fade-in-up';
    card.style.background = gradient;
    
    // Додаємо інформацію про градієнт
    const info = document.createElement('div');
    info.className = 'gradient-info';
    info.innerHTML = `
        <div class="gradient-preview" style="background: ${gradient};"></div>
        <button class="preview-btn" title="Попередній перегляд">
            <i class="fas fa-eye"></i>
        </button>
        <button class="apply-btn" title="Застосувати">
            <i class="fas fa-check"></i>
        </button>
    `;
    
    card.appendChild(info);
    
    // Попередній перегляд
    const previewBtn = info.querySelector('.preview-btn');
    previewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        applyGradientToText(document.getElementById('mainTitle'), gradient);
        showNotification('Gradient preview!');
    });
    
    // Застосування
    const applyBtn = info.querySelector('.apply-btn');
    applyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        applyGradientToText(document.getElementById('mainTitle'), gradient);
        showNotification('Gradient applied!');
    });
    
    // Клік по картці також застосовує градієнт
    card.addEventListener('click', () => {
        applyGradientToText(document.getElementById('mainTitle'), gradient);
        showNotification('Gradient applied!');
    });
    
    return card;
}

// Функція для заповнення галереї
function populateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    // Створюємо 12 карток з різними градієнтами
    for (let i = 0; i < 12; i++) {
        const gradient = Math.random() > 0.5 ? generateRandomGradient() : generateCustomGradient();
        const card = createGradientCard(gradient);
        galleryGrid.appendChild(card);
    }
}

// Функція для анімації елементів при скролі
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature, .gradient-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Функція для плавного скролу
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.getElementById('mainTitle');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const notificationClose = document.getElementById('notificationClose');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Обробник кліку на заголовок
    mainTitle.addEventListener('click', () => {
        const gradient = Math.random() > 0.5 ? generateRandomGradient() : generateCustomGradient();
        applyGradientToText(mainTitle, gradient);
        
        // Додаємо ефект пульсації
        mainTitle.classList.add('pulse');
        setTimeout(() => {
            mainTitle.classList.remove('pulse');
        }, 1000);
        
        showNotification('New gradient applied!');
    });
    
    // Обробник кнопки генерації
    generateBtn.addEventListener('click', () => {
        const gradient = Math.random() > 0.5 ? generateRandomGradient() : generateCustomGradient();
        applyGradientToText(mainTitle, gradient);
        
        // Анімація кнопки
        generateBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            generateBtn.style.transform = 'scale(1)';
        }, 150);
        
        showNotification('Gradient generated!');
    });
    
    // Обробник кнопки копіювання
    copyBtn.addEventListener('click', () => {
        const currentGradient = mainTitle.style.background;
        const cssCode = `.gradient-text {
    background: ${currentGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

body {
    background: ${currentGradient};
}`;
        
        copyToClipboard(cssCode);
        
        // Анімація кнопки
        copyBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            copyBtn.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Додаємо кнопку скидання фону
    const resetBtn = document.createElement('button');
    resetBtn.className = 'btn btn-secondary';
    resetBtn.innerHTML = '<i class="fas fa-undo"></i> Скинути Фон';
    resetBtn.style.marginLeft = '1rem';
    
    resetBtn.addEventListener('click', () => {
        resetBackground();
        showNotification('The background has been reset to the original!');
        
        // Анімація кнопки
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            resetBtn.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Додаємо кнопку до контейнера
    document.querySelector('.cta-buttons').appendChild(resetBtn);
    
    // Обробник закриття повідомлення
    notificationClose.addEventListener('click', () => {
        document.getElementById('notification').classList.remove('show');
    });
    
    // Обробники навігаційних посилань
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });
    
    // Заповнюємо галерею
    populateGallery();
    
    // Ініціалізуємо анімації при скролі
    animateOnScroll();
    
    // Додаємо ефект паралаксу для фонових елементів
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Додаємо ефект хвилі при кліку на кнопки
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Додаємо ефект хвилі до всіх кнопок
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Додаємо CSS для ефекту хвилі
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Показуємо привітання
    setTimeout(() => {
        showNotification('Welcome to the world of gradients! 🎨');
    }, 1000);
    
    // Додаємо індикатор поточного градієнта
    const gradientIndicator = document.createElement('div');
    gradientIndicator.id = 'gradient-indicator';
    gradientIndicator.innerHTML = `
        <div class="indicator-content">
            <span>Current gradient:</span>
            <div class="current-gradient" id="currentGradient"></div>
        </div>
    `;
    gradientIndicator.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        padding: 1rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--primary-color);
        box-shadow: var(--shadow);
        z-index: 1000;
        color: var(--white);
        font-size: 0.9rem;
    `;
    
    document.body.appendChild(gradientIndicator);
    
    // Функція для оновлення індикатора
    function updateGradientIndicator(gradient) {
        const currentGradientEl = document.getElementById('currentGradient');
        if (currentGradientEl) {
            currentGradientEl.style.background = gradient;
            currentGradientEl.style.width = '50px';
            currentGradientEl.style.height = '30px';
            currentGradientEl.style.borderRadius = '4px';
            currentGradientEl.style.border = '1px solid var(--primary-color)';
        }
    }
    
    // Оновлюємо функцію застосування градієнта
    const originalApplyGradient = applyGradientToText;
    applyGradientToText = function(element, gradient) {
        originalApplyGradient(element, gradient);
        updateGradientIndicator(gradient);
    };
});

// Додаємо глобальні функції для використання в консолі
window.GradientMagic = {
    generateRandomGradient,
    generateCustomGradient,
    applyGradientToText,
    showNotification
}; 