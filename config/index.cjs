/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe55c41a87134e552',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '35b2ead7ed278623d51543a41b992c72',

  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDBRt69T7WvnuEvCHXVgRLGbDxMA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ZRvUBqsqsP1NERI3ZgU5DSeinbpqVhgQbH364E40ZuI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '08-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1996', date: '08-18',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2025', date: '05-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-01-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-05-19' },
      ],
    },
        {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDBRt6-IefOU4Jb5wLMIN51g7Uxw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'CMs1FyPnBxBwwuQGXsQcUi1Zqx6JlKORTM9_WNJKZP4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '08-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1996', date: '08-18',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2025', date: '05-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-01-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-05-19' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDBRt69T7WvnuEvCHXVgRLGbDxMA',
    }
  ],

}

module.exports = USER_CONFIG

