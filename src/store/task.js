
export default {
    state: {
        taskList: [],
        curReport:[],
        curTask: {
            taskname: '',
            uuid: '',
            createtime: '',
            dbPath: '',
            threadNum: '',
            startFlg: false,
            progress: 0,
            interval: 0,
            modelList: [],
            sceneList: [],
            psList: [],
            projectList: [],
            wordList: [],
            user_email: '',
            voiceList: []
        },
        testData:
        {
            uuid: '',
            data: [
                {
                    voice: 'heybreeno',
                    voiceData: [
                        {
                            model: '20031',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 85.8,
                                    first: 92.8,
                                    second: 85.8,
                                    third: 85.8,
                                    liangping: 85.8
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 78.6,
                                    first: 87,
                                    second: 79.8,
                                    third: 78.6,
                                    liangping: 78.6
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 87.2,
                                    first: 95.2,
                                    second: 87.4,
                                    third: 87.2,
                                    liangping: 87.2
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 83.8,
                                    first: 92.6,
                                    second: 84,
                                    third: 83.8,
                                    liangping: 83.8
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 88.8,
                                    first: 97.8,
                                    second: 88.8,
                                    third: 88.8,
                                    liangping: 88.8
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 87.2,
                                    first: 96,
                                    second: 87.2,
                                    third: 87.2,
                                    liangping: 87.2
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 7.8,
                                    first: 11.6,
                                    second: 8.8,
                                    third: 7.8,
                                    liangping: 7.8
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 6,
                                    first: 8,
                                    second: 6.2,
                                    third: 6,
                                    liangping: 6
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 4.45,
                                    first: 88,
                                    second: 21.95,
                                    third: 4.45,
                                    liangping: 4.45
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 83.36,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                        {
                            model: '20846',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 85.2,
                                    first: 97.4,
                                    second: 85.6,
                                    third: 85.2,
                                    liangping: 85.2
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 80.6,
                                    first: 92.8,
                                    second: 80.6,
                                    third: 80.6,
                                    liangping: 80.6
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 85.6,
                                    first: 97.4,
                                    second: 86.6,
                                    third: 85.6,
                                    liangping: 85.6
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 84,
                                    first: 95.8,
                                    second: 85.6,
                                    third: 84,
                                    liangping: 84
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 86.6,
                                    first: 96.8,
                                    second: 87,
                                    third: 86.6,
                                    liangping: 86.6
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 86.6,
                                    first: 96.6,
                                    second: 87.2,
                                    third: 86.6,
                                    liangping: 86.6
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 12.4,
                                    first: 35.8,
                                    second: 15.2,
                                    third: 12.4,
                                    liangping: 12.4
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 7.2,
                                    first: 21.4,
                                    second: 8.8,
                                    third: 7.2,
                                    liangping: 7.2
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 3.15,
                                    first: 91,
                                    second: 29.7,
                                    third: 3.15,
                                    liangping: 3.15
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 83.05,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                        {
                            model: '21001',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 84.6,
                                    first: 94.4,
                                    second: 85.2,
                                    third: 84.6,
                                    liangping: 84.6
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 78.4,
                                    first: 90.6,
                                    second: 80.3,
                                    third: 78.4,
                                    liangping: 78.4
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 87,
                                    first: 96.6,
                                    second: 87.6,
                                    third: 87,
                                    liangping: 87
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 83.6,
                                    first: 94.6,
                                    second: 85.2,
                                    third: 83.6,
                                    liangping: 83.6
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 86.8,
                                    first: 96.2,
                                    second: 87,
                                    third: 86.8,
                                    liangping: 86.8
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 86.8,
                                    first: 96.2,
                                    second: 87.6,
                                    third: 86.8,
                                    liangping: 86.8
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 21.6,
                                    first: 43.6,
                                    second: 25,
                                    third: 21.6,
                                    liangping: 21.6
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 12.8,
                                    first: 21.8,
                                    second: 13.2,
                                    third: 12.8,
                                    liangping: 12.8
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 1.1,
                                    first: 62.6,
                                    second: 14.7,
                                    third: 1.1,
                                    liangping: 1.1
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 82.84,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                        {
                            model: '21005',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 83,
                                    first: 98.2,
                                    second: 83.6,
                                    third: 83,
                                    liangping: 83
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 61.4,
                                    first: 79.2,
                                    second: 64.4,
                                    third: 61.4,
                                    liangping: 61.4
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 86,
                                    first: 99.6,
                                    second: 87,
                                    third: 86,
                                    liangping: 86
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 60.6,
                                    first: 87.6,
                                    second: 62.4,
                                    third: 60.6,
                                    liangping: 60.6
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 3.4,
                                    first: 57.4,
                                    second: 3.6,
                                    third: 3.4,
                                    liangping: 3.4
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 1.8,
                                    first: 61.6,
                                    second: 2.2,
                                    third: 1.8,
                                    liangping: 1.8
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 16,
                                    first: 31.6,
                                    second: 18.8,
                                    third: 16,
                                    liangping: 16
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 10.6,
                                    first: 22.6,
                                    second: 11.3,
                                    third: 10.6,
                                    liangping: 10.6
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 65.42,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                    ]
                },
                {
                    voice: 'nihaoxiaobu',
                    voiceData: [
                        {
                            model: '20031',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 85.8,
                                    first: 92.8,
                                    second: 85.8,
                                    third: 85.8,
                                    liangping: 85.8
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 78.6,
                                    first: 87,
                                    second: 79.8,
                                    third: 78.6,
                                    liangping: 78.6
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 87.2,
                                    first: 95.2,
                                    second: 87.4,
                                    third: 87.2,
                                    liangping: 87.2
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 83.8,
                                    first: 92.6,
                                    second: 84,
                                    third: 83.8,
                                    liangping: 83.8
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 88.8,
                                    first: 97.8,
                                    second: 88.8,
                                    third: 88.8,
                                    liangping: 88.8
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 87.2,
                                    first: 96,
                                    second: 87.2,
                                    third: 87.2,
                                    liangping: 87.2
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 7.8,
                                    first: 11.6,
                                    second: 8.8,
                                    third: 7.8,
                                    liangping: 7.8
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 6,
                                    first: 8,
                                    second: 6.2,
                                    third: 6,
                                    liangping: 6
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 4.45,
                                    first: 88,
                                    second: 21.95,
                                    third: 4.45,
                                    liangping: 4.45
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 83.36,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                        {
                            model: '20846',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 85.2,
                                    first: 97.4,
                                    second: 85.6,
                                    third: 85.2,
                                    liangping: 85.2
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 80.6,
                                    first: 92.8,
                                    second: 80.6,
                                    third: 80.6,
                                    liangping: 80.6
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 85.6,
                                    first: 97.4,
                                    second: 86.6,
                                    third: 85.6,
                                    liangping: 85.6
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 84,
                                    first: 95.8,
                                    second: 85.6,
                                    third: 84,
                                    liangping: 84
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 86.6,
                                    first: 96.8,
                                    second: 87,
                                    third: 86.6,
                                    liangping: 86.6
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 86.6,
                                    first: 96.6,
                                    second: 87.2,
                                    third: 86.6,
                                    liangping: 86.6
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 12.4,
                                    first: 35.8,
                                    second: 15.2,
                                    third: 12.4,
                                    liangping: 12.4
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 7.2,
                                    first: 21.4,
                                    second: 8.8,
                                    third: 7.2,
                                    liangping: 7.2
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 3.15,
                                    first: 91,
                                    second: 29.7,
                                    third: 3.15,
                                    liangping: 3.15
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 83.05,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                        {
                            model: '21001',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 84.6,
                                    first: 94.4,
                                    second: 85.2,
                                    third: 84.6,
                                    liangping: 84.6
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 78.4,
                                    first: 90.6,
                                    second: 80.3,
                                    third: 78.4,
                                    liangping: 78.4
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 87,
                                    first: 96.6,
                                    second: 87.6,
                                    third: 87,
                                    liangping: 87
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 83.6,
                                    first: 94.6,
                                    second: 85.2,
                                    third: 83.6,
                                    liangping: 83.6
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 86.8,
                                    first: 96.2,
                                    second: 87,
                                    third: 86.8,
                                    liangping: 86.8
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 86.8,
                                    first: 96.2,
                                    second: 87.6,
                                    third: 86.8,
                                    liangping: 86.8
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 21.6,
                                    first: 43.6,
                                    second: 25,
                                    third: 21.6,
                                    liangping: 21.6
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 12.8,
                                    first: 21.8,
                                    second: 13.2,
                                    third: 12.8,
                                    liangping: 12.8
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 1.1,
                                    first: 62.6,
                                    second: 14.7,
                                    third: 1.1,
                                    liangping: 1.1
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 82.84,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                        {
                            model: '21005',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 83,
                                    first: 98.2,
                                    second: 83.6,
                                    third: 83,
                                    liangping: 83
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 61.4,
                                    first: 79.2,
                                    second: 64.4,
                                    third: 61.4,
                                    liangping: 61.4
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 86,
                                    first: 99.6,
                                    second: 87,
                                    third: 86,
                                    liangping: 86
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 60.6,
                                    first: 87.6,
                                    second: 62.4,
                                    third: 60.6,
                                    liangping: 60.6
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 3.4,
                                    first: 57.4,
                                    second: 3.6,
                                    third: 3.4,
                                    liangping: 3.4
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 1.8,
                                    first: 61.6,
                                    second: 2.2,
                                    third: 1.8,
                                    liangping: 1.8
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 16,
                                    first: 31.6,
                                    second: 18.8,
                                    third: 16,
                                    liangping: 16
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 10.6,
                                    first: 22.6,
                                    second: 11.3,
                                    third: 10.6,
                                    liangping: 10.6
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 65.42,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                    ]
                },
                {
                    voice: 'xiaobuxiaobu',
                    voiceData: [
                        {
                            model: '20031',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 85.8,
                                    first: 92.8,
                                    second: 85.8,
                                    third: 85.8,
                                    liangping: 85.8
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 78.6,
                                    first: 87,
                                    second: 79.8,
                                    third: 78.6,
                                    liangping: 78.6
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 87.2,
                                    first: 95.2,
                                    second: 87.4,
                                    third: 87.2,
                                    liangping: 87.2
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 83.8,
                                    first: 92.6,
                                    second: 84,
                                    third: 83.8,
                                    liangping: 83.8
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 88.8,
                                    first: 97.8,
                                    second: 88.8,
                                    third: 88.8,
                                    liangping: 88.8
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 87.2,
                                    first: 96,
                                    second: 87.2,
                                    third: 87.2,
                                    liangping: 87.2
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 7.8,
                                    first: 11.6,
                                    second: 8.8,
                                    third: 7.8,
                                    liangping: 7.8
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 6,
                                    first: 8,
                                    second: 6.2,
                                    third: 6,
                                    liangping: 6
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 4.45,
                                    first: 88,
                                    second: 21.95,
                                    third: 4.45,
                                    liangping: 4.45
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 83.36,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                        {
                            model: '20846',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 85.2,
                                    first: 97.4,
                                    second: 85.6,
                                    third: 85.2,
                                    liangping: 85.2
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 80.6,
                                    first: 92.8,
                                    second: 80.6,
                                    third: 80.6,
                                    liangping: 80.6
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 85.6,
                                    first: 97.4,
                                    second: 86.6,
                                    third: 85.6,
                                    liangping: 85.6
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 84,
                                    first: 95.8,
                                    second: 85.6,
                                    third: 84,
                                    liangping: 84
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 86.6,
                                    first: 96.8,
                                    second: 87,
                                    third: 86.6,
                                    liangping: 86.6
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 86.6,
                                    first: 96.6,
                                    second: 87.2,
                                    third: 86.6,
                                    liangping: 86.6
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 12.4,
                                    first: 35.8,
                                    second: 15.2,
                                    third: 12.4,
                                    liangping: 12.4
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 7.2,
                                    first: 21.4,
                                    second: 8.8,
                                    third: 7.2,
                                    liangping: 7.2
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 3.15,
                                    first: 91,
                                    second: 29.7,
                                    third: 3.15,
                                    liangping: 3.15
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 83.05,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                        {
                            model: '21001',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 84.6,
                                    first: 94.4,
                                    second: 85.2,
                                    third: 84.6,
                                    liangping: 84.6
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 78.4,
                                    first: 90.6,
                                    second: 80.3,
                                    third: 78.4,
                                    liangping: 78.4
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 87,
                                    first: 96.6,
                                    second: 87.6,
                                    third: 87,
                                    liangping: 87
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 83.6,
                                    first: 94.6,
                                    second: 85.2,
                                    third: 83.6,
                                    liangping: 83.6
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 86.8,
                                    first: 96.2,
                                    second: 87,
                                    third: 86.8,
                                    liangping: 86.8
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 86.8,
                                    first: 96.2,
                                    second: 87.6,
                                    third: 86.8,
                                    liangping: 86.8
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 21.6,
                                    first: 43.6,
                                    second: 25,
                                    third: 21.6,
                                    liangping: 21.6
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 12.8,
                                    first: 21.8,
                                    second: 13.2,
                                    third: 12.8,
                                    liangping: 12.8
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 1.1,
                                    first: 62.6,
                                    second: 14.7,
                                    third: 1.1,
                                    liangping: 1.1
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 82.84,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                        {
                            model: '21005',
                            modelData: [
                                {
                                    scene: 'home',
                                    sceneRate: 83,
                                    first: 98.2,
                                    second: 83.6,
                                    third: 83,
                                    liangping: 83
                                },
                                {
                                    scene: 'market',
                                    sceneRate: 61.4,
                                    first: 79.2,
                                    second: 64.4,
                                    third: 61.4,
                                    liangping: 61.4
                                },
                                {
                                    scene: 'office',
                                    sceneRate: 86,
                                    first: 99.6,
                                    second: 87,
                                    third: 86,
                                    liangping: 86
                                },
                                {
                                    scene: 'outdoors',
                                    sceneRate: 60.6,
                                    first: 87.6,
                                    second: 62.4,
                                    third: 60.6,
                                    liangping: 60.6
                                },
                                {
                                    scene: 'car_80km',
                                    sceneRate: 3.4,
                                    first: 57.4,
                                    second: 3.6,
                                    third: 3.4,
                                    liangping: 3.4
                                },
                                {
                                    scene: 'car_80km_r',
                                    sceneRate: 1.8,
                                    first: 61.6,
                                    second: 2.2,
                                    third: 1.8,
                                    liangping: 1.8
                                },
                                {
                                    scene: 'AEC_8',
                                    sceneRate: 16,
                                    first: 31.6,
                                    second: 18.8,
                                    third: 16,
                                    liangping: 16
                                },
                                {
                                    scene: 'AEC_16',
                                    sceneRate: 10.6,
                                    first: 22.6,
                                    second: 11.3,
                                    third: 10.6,
                                    liangping: 10.6
                                },
                                {
                                    scene: 'IAR',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'FA',
                                    sceneRate: 0,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                                {
                                    scene: 'Qoe',
                                    sceneRate: 65.42,
                                    first: 0,
                                    second: 0,
                                    third: 0,
                                    liangping: 0
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    },
    mutations: {

    }
}