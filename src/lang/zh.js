/**
 * Created by heganxin on 2019/2/15.
 */
export default {
  error: {
    username_not_exist: '账号不存在',
    password_error: '密码错误',
    required: '必填',
    please_selector: '请选择',
    no_state: '仅可编辑正在工作、驳回、已取消的封样文档'
  },
  success: {
    update_success: '修改成功',
    create_success: '创建成功',
    remove_success: '移除成功',
    finsh_task_success: '完成任务成功'
  },
  table: {
    name: '名称',
    theme: '主题',
    state: '状态',
    tasksType: '状况',
    context: '上下文',
    role: '角色',
    allocated: '已分配',
    task_name: '任务名',
    material_number: '物料编号',
    material_name: '物料名称',
    model_specification: '型号规格',
    project_name: '项目名',
    sission_deadline: '任务期限'
  },
  fengyangRoute: {
    myTasks: '待提交物料封样',
    under_review: '正在审阅',
    sealed_Sample: '已封样',
    ypdq_task: '样品到期任务',
    fengyang_seacher: '物料封样搜索',
    details: '封样详细信息',
    ypdqdetails: '样品到期详细信息'
  },
  huanbaoRoute: {
    myTasks: '我的任务',
    third_report: '第三方报告到期任务',
    Material_submitted: '待提交物料环保',
    Material_Search: '物料环保搜索',
    details: '任务详情',
    detailthird: '第三方到期详情'
  },
  huanbaoTable: {
    third: {
      taskName: '任务名',
      theme: '流程编号',
      state: '状态',
      specification: '任务最后期限',
      startTime: '流程开始时间',
      allNumber: '所有环保报告的编号',
      lqNumber: '龙旗料号',
      rawmaterial: '原材料',
      ReportType: '报告类型',
      ReportNumber: '报告编号',
      ReportDate: '报告日期',
      TestingUnit: '检测单位',
      operation: '操作'
    },
    submitted: {
      taskName: '任务名',
      materialNumber: '物料编号',
      materialName: '物料名称',
      specification: '型号规格',
      projectNumber: '项目代号',
      FMD: 'FMD',
      MSDS: 'MSDS/专利证明',
      RoHS: 'RoHS',
      HF: 'HF',
      REACH: 'REACH',
      OTHER: '其他',
      OTHER2: '客户特殊需求',
      envProtectionStatus: '环保属性',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作'
    },
    search: {
      platform: '平台',
      applying_for: '申请项目',
      bom_number: 'BOM料号',
      material_number: '物料编号',
      escape_clause: '豁免条款',
      bom_classify: 'BOM分类',
      status: '状态',
      cas_no: 'CAS No.',
      search: '查询',
      mail: '催邮',
      name: '名称',
      version: '版本',
      material_name: '物料名称',
      model_specification: '型号规格',
      supplier: '供应商',
      manufacturer: '生产厂家',
      time: '环保创建时时间',
      result: '物料环保搜索结果',
      eNumber: '环保编号',
      eName: '环保名称',
      eStatus: '环保状态',
      createDate: '创建时间'
    },
    searchStatus: {
      TEMP: '临时',
      INWORK: '正在工作',
      UNDERREVIEW: '正在审阅',
      RELEASED: '已发布',
      REWORK: '驳回',
      SAMPLE_EXPIRE: '封样到期',
      CANCELLED: '已取消',
      DISABLE: '废弃'
    },
    escapeClause: {
      title: '选择RoHS豁免条款',
      RoHSNumber: '豁免条款编号',
      RoHSType: '豁免条款类别',
      RoHSDescription: '豁免条款描述',
      range: '失效范围',
      result: '豁免条款搜索结果',
      ensure: '确定',
      cancel: '取消'
    },
    detailTable: {
      version: '版本',
      materialNumber: '物料编码',
      materialName: '物料名称',
      modelName: '型号规格',
      supplierNumber: '供应商',
      requestProject: '申请项目',
      manufacturer: '生产厂家',
      envProtectionStatus: '环保属性',
      requestCause: '申请原因',
      number: '编号',
      name: '名称',
      state: '状态',
      document: '环保文档',
      Supply: '供货',
      unSupply: '不供货',
      remark: '备注',
      complete: '完成任务',
      approvals: '审批日志',
      third: '过期第三方报告',
      approval: '审批',
      approvalComments: '审批意见',
      operating: '操作',
      fileUpload: '文件上传',
      uploadData: '上传数据',
      addReport: '添加报告',
      selectFile: '请选择文件',
      prompt: '提示'
    },
    approval: {
      false: '未完成',
      true: '完成',
      state: '状态',
      activityName: '环节名称',
      roleName: '角色',
      ownerName: '审批人员',
      vote: '路由',
      comment: '备注',
      finishTime: '审批时间'
    },
    FMD: {
      attachType: '资料类型',
      fileName: '文件名',
      documentType: '条目类型',
      materialNumber: '物料编号',
      reportNumber: '报告编号',
      reportType: '报告类型',
      reportDate: '报告日期',
      createTime: '创建时间',
      modifyTime: '上次修改时间',
      examUnit: '检测单位',
      third: '可复用的第三方报告',
      attribute: '详细信息',
      edit: '编辑',
      delete: '删除',
      download: '下载FMD模板',
      upload: '上传FMD模板',
      reuse: '第三方报告复用',
      materialName: '原材料名称',
      materialWeight: '原材料重量',
      materialGroup: '原材料组',
      manufacturer: '原材料制造商',
      subMaterialName: '子物质名称',
      casNo: 'CAS No.',
      substanceWeight: '子物质重量',
      contentRate: '含有率',
      exemptions: '豁免条款',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作',
      Relatedmaterials: '相关物料',
      Reusable: '可复用的MSDS和申报物质报告',
      REPORT: '报告',
      Selectfile: '添加文件'
    },
    MSDS: {
      fileName: '文件名',
      endTime: '上次修改时间',
      materialName: '原材料名称',
      manufacturer: '原材料制造商',
      ipForm: 'IP Form',
      msds: '原材料MSDS',
      patentCert: '专利证明',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作',
      material: '原材料MSDS',
      patentCertificate: '专利证明',
      Attributes: '属性',
      UploadNewFiles: '上传新文件',
      Remove: '移除',
      downloads: '下载IP Form模板',
      download: '下载'
    },
    ROHS: {
      materialName: '原材料名称',
      materialGroup: '原材料组',
      manufacturer: '原材料制造商',
      pb: 'Pb',
      cd: 'Cd',
      hg: 'Hg',
      cr6p: 'Cr6+',
      pbbs: 'PBBs',
      pbdes: 'PBDEs',
      dehp: 'DEHP',
      bbp: 'BBP',
      dbp: 'DBP',
      dibp: 'DIBP',
      exemptions: '豁免条款',
      reportName1: 'RoHS报告',
      examUnit: '检测单位',
      reportDate: '报告日期',
      reportNumber: '报告编号',
      state: '状态',
      metalSum: '金属物资总和',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作',
      download: '下载导入模板',
      Upload: '上传环保数据',
      editGeneralReport: '编辑RoHS总报告',
      viewGeneralReport: '查看RoHS总报告',
      lastTime: '上次修改时间',
      report: 'RoHS报告',
      remark: '备注'
    },
    HF: {
      materialName: '原材料名称',
      manufacturer: '原材料制造商',
      cl: 'Cl',
      br: 'Br',
      clBr: 'Cl+Br',
      fileRetardant: '是否阻燃剂',
      reportCount: 'HF报告',
      reportDate: '报告日期',
      reportNumber: '报告编号',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作',
      report: 'HF报告',
      yes: '是',
      no: '否',
      editGeneralReport: '编辑HF总报告',
      viewGeneralReport: '查看HF总报告'
    },
    REACH: {
      materialName: '原材料名称',
      manufacturer: '原材料制造商',
      reportMaterialContained: '是否有申报物质',
      reportMaterialReport: '申报物质报告',
      reportCount: 'REACH报告',
      reportDate: '报告日期',
      reportNumber: '报告编号',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作',
      editGeneralReport: '编辑REACH总报告',
      viewGeneralReport: '查看REACH总报告',
      Editstatement: '编辑REACH总声明',
      Viewstatement: '查看REACH总声明',
      statement: 'REACH总声明',
      REACH: 'REACH报告',
      downloads: '下载报告模板'
    },
    OTHER: {
      editGeneralReport: '编辑其他总报告',
      viewGeneralReport: '查看其他总报告',
      materialName: '原材料名称',
      manufacturer: '原材料制造商',
      ni: 'Ni',
      pahs: 'PAHs',
      didp: 'DIDP',
      dinp: 'DINP',
      dnhp: 'DnHP',
      sccp: 'SCCP',
      be: 'Be',
      sb: 'Sb',
      reportCount: '报告',
      reportDate: '报告日期',
      reportNumber: '报告编号',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作',
      OTHER: '其他报告',
      AddSubstance: '添加新物质',
      MaterialName: '物质名称',
      substanceWeight: '物质重量',
      Reporttype: '报告类型',
      substance: '其他物质含量'
    },
    OTHER2: {
      fileName: '文件名',
      fileType: '资料类型',
      modifyTimestamp: '上次修改时间',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作',
      specialneeds: '编辑客户特殊需求申报',
      SONYinformation: 'SONY项目必交资料',
      Lenovoinformation: 'Lenovo项目必交资料'
    }
  },
  tagsView: {
    close: '关闭',
    closeother: '关闭其他',
    closeall: '关闭所有'
  },
  m: {
    music: '音乐',
    login: '登录',
    zdsc: '自动生成',
    loginTitle: '龙旗封样环保系统',
    homepage: '首页',
    Logout: '注销',
    back_home: '返回首页',
    Notice: '公告',
    editUserInfo: '编辑接口人信息',
    SealedInfoEdit: '编辑封样详细信息',
    editReport: '编辑报告'
  },
  placeholder: {
    date: '选择日期',
    username: '账号',
    password: '密码'
  },
  validate: {
    username: '请输入账号',
    password: '请输入密码'
  },
  editUserInfo: {
    Supplier: '供应商',
    User_name: '用户名',
    Password: ' 密码',
    Verify_password: ' 确认密码',
    Name: '接口人姓名',
    Email: '接口人邮箱',
    Telephone: '接口人办公电话',
    Handset: '接口人手机',
    Manager_name: '管理者姓名',
    Manager_email: '管理者邮箱',
    Manager_telephone: '管理者办公电话',
    Manager_handset: '管理者手机'
  },
  taskName: {
    submitSample: '待提交物料封样',
    submitEnvironmentalInformation: '提交环保资料',
    changeExpirationReport: '更新到期报告',
    submitExpiredSample: '邮寄样品',
    changeSample: '更新封样资料'
  },
  state: {
    REWORK: '驳回',
    INWORK: '正在工作',
    SAMPLE_EXPIRE: '封样到期',
    UNDERREVIEW: '正在审阅',
    RELEASED: '发布',
    CANCELLED: '已取消'
  },
  formButton: {
    cancel: '取消',
    submit: '提交',
    edit: '编辑',
    edit_k: '编辑快递信息',
    Approval: '审批',
    delete: '删除',
    check: '查看',
    ensure: '确定',
    relatedMaterials: '相关物料'
  },
  fengyangTable: {
    detail: {
      version: '版本',
      materialNumber: '物料编号',
      materialName: '物料名称',
      lq_classification: '物料分类',
      lq_project: '申请项目',
      lq_model_name: '规格型号',
      lq_request_cause: '申请原因',
      lq_manufacturer: '生产厂家',
      lq_supplier: '供应商',
      lq_supplier_number: '供应商编码',
      lq_environmental_protection_status: '环保属性',
      approveddate: '封样承认时间',
      lq_supplier_rank: '供应商等级',
      lq_class_category: '物料类别',
      lq_size: '尺寸(长*宽*高 单位：mm，公差±)',
      lq_monomers_weight: '单体净重(单位：g，公差±3%)',
      lq_fiction_preston: '拟制者',
      lq_fiction_time: '拟制日期',
      lq_reviewer: '审核者',
      lq_review_time: '审核日期',
      lq_approve: '批准',
      lq_approve_time: '批准日期',
      lq_courier_number: '快递单号',
      lq_courier_number_time: '快递发出日期',
      lq_sender: '发件人',
      lq_tel: '电话',
      lq_deadline_sign: '最后期限标识',
      title_attribute: '属性',
      title_Sealed_document: '封样文档',
      lq_desc: '说明',
      Supply: '供货',
      unSupply: '不供货',
      add: '添加',
      create: '新建',
      edit: '编辑',
      remove: '移除'
    },
    seacher: {
      number: '编号',
      seacher_info: '查看信息',
      name: '名称',
      Specification_type: '规格型号',
      stauts: '状态',
      create_time: '创建时间',
      Material_category: '物料规格型号',
      lq_class_category: '物料类别',
      Seal_recognition_time: '封样承认时间',
      doc_number: '文档编号',
      doc_name: '文档名称',
      type3: '三级分类',
      seach_result: '搜索结果',
      title: {
        Material_seacher: '物料封样搜索',
        add_doc: '添加文档'
      }
    }
  },
  app_enum: {
    lqClassCategory: {
      MATERIALCATEGOR1: '标准结构件',
      MATERIALCATEGORY2: '结构壳料',
      MATERIALCATEGORY3: '结构辅料',
      MATERIALCATEGORY4: '一般结构料',
      MATERIALCATEGORY5: '天线',
      MATERIALCATEGORY6: '组件',
      MATERIALCATEGORY7: '电声器件',
      MATERIALCATEGORY8: '机电料',
      MATERIALCATEGORY9: '包材料（除配件外）',
      MATERIALCATEGORY10: '包材料（配件）',
      MATERIALCATEGORY11: '安规器件',
      MATERIALCATEGORY12: 'PCB',
      MATERIALCATEGORY13: '售后辅料',
      undefined: ''
    },
    lq_supplier_rank: {
      FORONE: '一供',
      FORTWO: '二供',
      FORCUSTOMERS: '客供',
      undefined: ''
    },
    lqThirdLevel: {
      'PFMEA_Seq': 'PFMEA',
      'HF_ID_Seq': '其他限用物质成分调查表',
      'CP_Seq': 'CP',
      'CLCFB_ID_Seq': '材料成分表',
      'RZZS_ID_Seq': '3C认证证书',
      'YPBGLLB_ID_Seq': '样品变更履历表',
      'FM_ID_Seq': '封面',
      'PLSCLLBG_ID_Seq': '批量生产良率报告',
      'WLBOMO_ID_Seq': '物料BOM清单',
      'GXTJ_ID_Seq': '成型条件',
      'ZJLCT_ID_Seq': '制造流程图',
      'QCCCLBG_ID_Seq': 'FAI全尺寸报告',
      'BZFS_ID_Seq': '包装方式',
      'AGBG_ID_Seq': '安规报告',
      'GCTZ_ID_Seq': '工程图面',
      'CPKBG_ID_Seq': 'CPK报告',
      'ROHS_ID_Seq': 'RoHS限用物质成份调查表',
      'KKXCSBG_ID_Seq': '可靠性测试报告',
      'QCGCT_ID_Seq': 'QC工程图',
      'YPTP_ID_Seq': '样品图片',
      'SPEC_ID_Seq': '规格书',
      'MSA_Seq': 'MSA',
      'DQJXXNCSBG_ID_Seq': '电气/机械性能测试报告/出货检验报告',
      'YPCQTP_ID_Seq': '样品拆解图片'
    }
  },
  TableTile: {
    files: {
      number: '编号',
      version: '版本',
      name: '名称',
      status: '状态',
      type3: '三级分类',
      approval: '审批',
      attachment: '封样文档附件',
      explain: '说明',
      business: '业务',
      Enclosure: '附件'
    }
  },
  pcn: {
    title: {
      mypcn: '我的PCN',
      createPcn: '创建PCN',
      rejectPcn: '驳回PCN',
      information: '基本信息'
    },
    form: {
      comment: '驳回审批意见',
      ChangeType: '变更类型',
      Name: '名称',
      project: '项目',
      number: '编号',
      userName: '拼音',
      DetailedDescription: '详细描述',
      RequireCompletionTime: '要求完成时间',
      ResourceEngineer: '龙旗资源工程师'
    },
    search: {
      name: '名称',
      email: '邮件',
      userName: '拼音'
    },
    table: {
      ResubmitPCN: '重新提交PCN',
      pg_number: '变更单号',
      pg_name: '变更名称',
      ChangeType: '变更类型',
      number: '编号',
      Name: '名称',
      project: '项目',
      RequireCompletionTime: '要求完成时间',
      SelectionResourceEngineer: '选择龙旗资源工程师',
      state: '状态'
    },
    select: {
      state: {
        OPEN: '开启',
        UNDERREVIEW: '正在审阅',
        REWORK: '驳回',
        RESOLVED: '已解决',
        CANCELLED: '已取消'
      }
    }
  },
  supplement: {
    fengyang: {
      downExcel: '生成的承认书EXCEL附件',
      Template_Download: '模板下载',
      Template_click_down: '点击下载模板',
      UploadFiles: '上传文件',
      LabelOrFilename: '标签或文件名',
      remark: '备注',
      download: '下载',
      file: '文件'
    }
  },
  OUTRESOURCE: {
    tittle: {
      out: '我的待下载资料',
      search: '所有资料查询'
    },
    userInfo: {
      account: '账号',
      password: '密码',
      fullname: '姓名',
      mail: '邮箱',
      mobile: '固定电话',
      tel: '移动电话',
      unit: '所属单位',
      group: '所在组'
    },
    download: {
      number: '单号',
      name: '名称',
      project: '项目',
      date: '发布日期',
      person: '发布人',
      option: '操作',
      situation: '情况',
      down: '下载',
      ifdown: '未下载',
      downs: '已下载'
    },
    search: {
      result: '搜索结果'
    }
  }

}
