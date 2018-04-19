function Create_a_common_curriculum() {

	$('#Class_template').modal("show");

	$('#Class_template').on('hidden.bs.modal', function () {
		console.log("ok");
	})

	$(document).on("click", ".Ordinary_class_menu_title_icon", function() {
		var this_obj = $(this);
		var this_parent = $(this).parents(".Ordinary_class_menu ");

		if(this_obj.html() == "&lt;") {
			this_obj.html("&gt;");
			this_parent.animate({width: "0px"}, 300);
		}else {
			this_obj.html("&lt;");
			this_parent.animate({width: "194px"}, 300);
		}

	})

}

//创建章节对象
function Create_a_common_curriculum_add_chapter(this_obj) {
	var Create_a_common_curriculum_add_chapter = {
		tag: "div",
		class: "panel-group",
		id: "accordion"
	}

	Ordinary_class_Create_object_Initialize(this_obj, Create_a_common_curriculum_add_chapter);
}

//常见问题对象
function Ordinary_class_common_problems_obj(this_obj) {
	var Ordinary_class_common_problems = {
		tag: "section",
		class: "Ordinary_class_common_problems",
		Ordinary_class_common_problems_left: {
			tag: "section",
			class: "Ordinary_class_common_problems_title pull-left",
			value: "常见问题："
		},
		Ordinary_class_common_problems_right: {
			tag: "section",
			class: "Ordinary_class_common_problems_content pull-left",
			Ordinary_class_common_problems_content_button: {
				tag: "section",
				class: "Ordinary_class_common_problems_content_date"
			},
			Ordinary_class_common_problems_content_button: {
				tag: "section",
				class: "Ordinary_class_common_problems_content_prompt",
				value: "<span class='Common_problems_icon'></span>+ 新增常见问题"
			}
		}
	}
	Ordinary_class_Create_object_Initialize(this_obj, Ordinary_class_common_problems);
}

//添加问题对象
function Ordinary_class_add_common_problems(this_obj) {
	var Ordinary_class_add_common_problems = {
		tag: "section",
		class: "Ordinary_class_add_common_problems",
		Ordinary_class_add_common_problems_question: {
			tag: "section",
			class: "Ordinary_class_add_common_problems_question",
			Ordinary_class_add_common_problems_question_title: {
				tag: "section",
				class: "Ordinary_class_add_common_problems_title pull-left",
				value: "问题："
			},
			Ordinary_class_add_common_problems_question_input: {
				tag: "input",
				class: "Ordinary_class_add_common_problems_title pull-left",
				type: "text",
				autocomplete: "off"
			}
		},
		Ordinary_class_add_common_problems_answer: {
			tag: "section",
			class: "Ordinary_class_add_common_problems_question",
			Ordinary_class_add_common_problems_question_title: {
				tag: "section",
				class: "Ordinary_class_add_common_problems_title pull-left",
				value: "答案："
			},
			Ordinary_class_add_common_problems_question_input: {
				tag: "input",
				class: "Ordinary_class_add_common_problems_title pull-left",
				type: "text",
				autocomplete: "off"
			}
		},
		Ordinary_class_add_common_problems_buttons: {
			tag: "section",
			class: "Ordinary_class_add_common_problems_buttons",
			Ordinary_class_add_common_problems_button_first: {
				tag: "section",
				class: "Ordinary_class_add_common_problems_button",
				value: "取消"
			},
			Ordinary_class_add_common_problems_button_second: {
				tag: "section",
				class: "Ordinary_class_add_common_problems_button",
				value: "保存"
			},
			Ordinary_class_add_common_problems_button_third: {
				tag: "section",
				class: "Ordinary_class_add_common_problems_button",
				value: "继续添加"
			}
		}
	}
	Ordinary_class_Create_object_Initialize(this_obj, Ordinary_class_add_common_problems);
}

//参考教材对象
function Ordinary_class_reference_materials(this_obj) {
	var Ordinary_class_reference_materials = {
		tag: "section",
		class: "Ordinary_class_reference_materials",
		Ordinary_class_reference_materials_left: {
			tag: "section",
			class: "Ordinary_class_reference_materials_title pull-left",
			value: "参考材料："
		},
		Ordinary_class_reference_materials_right: {
			tag: "section",
			class: "Ordinary_class_reference_materials_content pull-left",
			Ordinary_class_reference_materials_content_button: {
				tag: "section",
				class: "Ordinary_class_reference_materials_content_date"
			},
			Ordinary_class_reference_materials_content_button: {
				tag: "section",
				class: "Ordinary_class_reference_materials_content_prompt",
				value: "<span class='Reference_materials_icon'></span>+ 新增参考教材"
			}
		}
	}
	Ordinary_class_Create_object_Initialize(this_obj, Ordinary_class_reference_materials);
}

//添加参考材料对象
function Ordinary_class_add_reference_materials(this_obj) {
	var Ordinary_class_add_reference_materials = {
		tag: "section",
		class: "Ordinary_class_add_reference_materials",
		Ordinary_class_add_reference_materials_item_first: {
			tag: "section",
			class: "Ordinary_class_add_reference_materials_question",
			Ordinary_class_add_reference_materials_question_title: {
				tag: "section",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				value: "教材或文章名："
			},
			Ordinary_class_add_reference_materials_question_input: {
				tag: "input",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				type: "text",
				autocomplete: "off"
			}
		},
		Ordinary_class_add_reference_materials_item_second: {
			tag: "section",
			class: "Ordinary_class_add_reference_materials_question",
			Ordinary_class_add_reference_materials_question_title: {
				tag: "section",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				value: "URL："
			},
			Ordinary_class_add_reference_materials_question_input: {
				tag: "input",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				type: "text",
				autocomplete: "off"
			}
		},
		Ordinary_class_add_reference_materials_item_third: {
			tag: "section",
			class: "Ordinary_class_add_reference_materials_question",
			Ordinary_class_add_reference_materials_question_title: {
				tag: "section",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				value: "作者："
			},
			Ordinary_class_add_reference_materials_question_input: {
				tag: "input",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				type: "text",
				autocomplete: "off"
			}
		},
		Ordinary_class_add_reference_materials_item_fourth: {
			tag: "section",
			class: "Ordinary_class_add_reference_materials_question",
			Ordinary_class_add_reference_materials_question_title: {
				tag: "section",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				value: "出版社："
			},
			Ordinary_class_add_reference_materials_question_input: {
				tag: "input",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				type: "text",
				autocomplete: "off"
			}
		},
		Ordinary_class_add_reference_materials_item_fifth: {
			tag: "section",
			class: "Ordinary_class_add_reference_materials_question",
			Ordinary_class_add_reference_materials_question_title: {
				tag: "section",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				value: "出版日期："
			},
			Ordinary_class_add_reference_materials_question_input: {
				tag: "input",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				type: "text",
				autocomplete: "off"
			}
		},
		Ordinary_class_add_reference_materials_item_sixth: {
			tag: "section",
			class: "Ordinary_class_add_reference_materials_question",
			Ordinary_class_add_reference_materials_question_title: {
				tag: "section",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				value: "ISBN："
			},
			Ordinary_class_add_reference_materials_question_input: {
				tag: "input",
				class: "Ordinary_class_add_reference_materials_title pull-left",
				type: "text",
				autocomplete: "off"
			}
		},
		Ordinary_class_add_reference_materials_buttons: {
			tag: "section",
			class: "Ordinary_class_add_reference_materials_buttons",
			Ordinary_class_add_reference_materials_button_first: {
				tag: "section",
				class: "Ordinary_class_add_reference_materials_button",
				value: "取消"
			},
			Ordinary_class_add_reference_materials_button_second: {
				tag: "section",
				class: "Ordinary_class_add_reference_materials_button",
				value: "保存"
			},
			Ordinary_class_add_reference_materials_button_third: {
				tag: "section",
				class: "Ordinary_class_add_reference_materials_button",
				value: "继续添加"
			}
		}
	}
	Ordinary_class_Create_object_Initialize(this_obj, Ordinary_class_add_reference_materials);
}

//先修知识对象
function Ordinary_class_Ap_knowledge(this_obj) {
	var Ordinary_class_Ap_knowledge = {
		tag: "section",
		class: "Ordinary_class_Ap_knowledge",
		Ordinary_class_Ap_knowledge_left: {
			tag: "section",
			class: "Ordinary_class_Ap_knowledge_title pull-left",
			value: "先修知识："
		},
		Ordinary_class_Ap_knowledge_right: {
			tag: "section",
			class: "Ordinary_class_Ap_knowledge_content pull-left",
			Ordinary_class_Ap_knowledge_content_button: {
				tag: "textarea",
				class: "Ordinary_class_Ap_knowledge_content_date"
			}
		}
	}
	Ordinary_class_Create_object_Initialize(this_obj, Ordinary_class_Ap_knowledge);
}

//标签
function Ordinary_class_tags(this_obj) {
	var Ordinary_class_tags = {
		tag: "section",
		class: "Ordinary_class_tags",
		Ordinary_class_Ap_knowledge_left: {
			tag: "section",
			class: "Ordinary_class_tags_title pull-left",
			value: "先修知识："
		},
		Ordinary_class_Ap_knowledge_right: {
			tag: "section",
			class: "Ordinary_class_tags_content pull-left",
			Ordinary_class_Ap_knowledge_input: {
				tag: "input",
				class: "Ordinary_class_tags_content_input",
				type: "text",
				autocomplete: "off",
				id: "Ordinary_class_tag"
			},
			Ordinary_class_Ap_knowledge_text: {
				tag: "section",
				class: "Ordinary_class_tags_content_text",
				value: "<b>提示</b>：描述课程的类别,内容,特点。合理的标签能够让用户更容易搜到您的课程。最多可设置6个。"
			}
		}
	}
	Ordinary_class_Create_object_Initialize(this_obj, Ordinary_class_tags);
}

//适合人群
function Suits_the_crowd(this_obj) {
	var Suits_the_crowd = {
		tag: "section",
		class: "Suits_the_crowd",
		Suits_the_crowd_left: {
			tag: "section",
			class: "Suits_the_crowd_title pull-left",
			value: "适合人群："
		},
		Suits_the_crowd_right: {
			tag: "section",
			class: "Suits_the_crowd_content pull-left",
			Suits_the_crowd_radio_first: {
				tag: "section",
				class: "Suits_the_crowd_radios",
				Suits_the_crowd_icon: {
					tag: "section",
					class: "Suits_the_crowd_icon pull-left",
					Suits_the_crowd_icon_small: {
						tag: "section",
						class: "Suits_the_crowd_icon_small"
					}
				},
				Suits_the_crowd_text: {
					tag: "section",
					class: "Suits_the_crowd_text pull-left",
					value: "初级"
				}
			},
			Suits_the_crowd_radio_second: {
				tag: "section",
				class: "Suits_the_crowd_radios",
				Suits_the_crowd_icon: {
					tag: "section",
					class: "Suits_the_crowd_icon pull-left",
					Suits_the_crowd_icon_small: {
						tag: "section",
						class: "Suits_the_crowd_icon_small"
					}
				},
				Suits_the_crowd_text: {
					tag: "section",
					class: "Suits_the_crowd_text pull-left",
					value: "中级"
				}
			},
			Suits_the_crowd_radio_third: {
				tag: "section",
				class: "Suits_the_crowd_radios",
				Suits_the_crowd_icon: {
					tag: "section",
					class: "Suits_the_crowd_icon pull-left",
					Suits_the_crowd_icon_small: {
						tag: "section",
						class: "Suits_the_crowd_icon_small"
					}
				},
				Suits_the_crowd_text: {
					tag: "section",
					class: "Suits_the_crowd_text pull-left",
					value: "高级"
				}
			}
		}
	}
	Ordinary_class_Create_object_Initialize(this_obj, Suits_the_crowd);
}

//课程宣传短片
function Promotional_video(this_obj) {
	var Promotional_video = {
		tag: "section",
		class: "Promotional_video",
		Promotional_video_left: {
			tag: "section",
			class: "Promotional_video_title pull-left",
			value: "适合人群："
		},
		Promotional_video_right: {
			tag: "section",
			class: "Promotional_video_content pull-left",
			Promotional_video_section_first: {
				tag: "section",
				class: "Promotional_video_section",
				Promotional_video_section_vedio_show: {
					tag: "section",
					class: "Promotional_video_section_vedio_show"
				},
				Promotional_video_section_vedio_prompt: {
					tag: "section",
					class: "Promotional_video_section_vedio_prompt",
					value: "<b>提示</b>：观看了制作精良的宣传视频的学生将增加五倍的概率 来注册您的课程。精彩的宣传片能使您的营收增至10倍之多。"
				}
			},
			Promotional_video_section_second: {
				tag: "section",
				class: "Promotional_video_section",
				Promotional_video_section_prompt_first: {
					tag: "section",
					class: "Promotional_video_section_requirements",
					value: "支持MP4式,建议时长为5-10分钟,大小不超过500M"
				},
				Promotional_video_section_prompt_second: {
					tag: "section",
					class: "Promotional_video_section_upload_button",
					value: "上传视频"
				}
			}
		}
	}
	Ordinary_class_Create_object_Initialize(this_obj, Promotional_video);
}

//添加章节
function Ordinary_class_add_chapter(this_obj) {
	var Ordinary_class_add_chapter = {
		tag: "section",
		class: "Ordinary_class_add_chapter",
		Ordinary_class_add_chapter_first: {
			tag: "section",
			class: "Ordinary_class_add_chapter_top",
			Ordinary_class_add_chapter_name: {
				tag: "section",
				class: "Ordinary_class_add_chapter_name",
				Ordinary_class_add_chapter_name_content_first: {
					tag: "section",
					class: "Ordinary_class_add_chapter_name_title pull-left",
					value: "第二章"
				},
				Ordinary_class_add_chapter_name_content_second: {
					tag: "input",
					class: "Ordinary_class_add_chapter_name_input pull-left",
					placeholder: "请输入本章标题"
				},
				Ordinary_class_add_chapter_name_content_third: {
					tag: "second",
					class: "Ordinary_class_add_chapter_delete pull-left",
					value: "<span class='Ordinary_class_add_chapter_delete_icon'></span> 删除本章"
				}
			},
			Ordinary_class_add_chapter_prompt: {
				tag: "section",
				class: "Ordinary_class_add_chapter_prompt",
				value: "取消章的内容"
			},
			Ordinary_class_add_chapter_content: {
				tag: "section",
				class: "Ordinary_class_add_chapter_content",
				Ordinary_class_add_chapter_content_prompt: {
					tag: "section",
					class: "Ordinary_class_add_chapter_content_prompt",
					value: "请选择添加课程内容的主要类型"
				},
				Ordinary_class_add_chapter_content_list: {
					tag: "section",
					class: "Ordinary_class_add_chapter_content_list",
					Ordinary_class_add_chapter_content_list_vedio: {
						tag: "section",
						class: "Ordinary_class_add_chapter_content_list_vedio",
						Ordinary_class_add_chapter_content_list_vedio_icon: {
							tag: "section",
							class: "Ordinary_class_add_chapter_content_list_vedio_icon"
						},
						Ordinary_class_add_chapter_content_list_vedio_text: {
							tag: "section",
							class: "Ordinary_class_add_chapter_content_list_vedio_text",
							value: "视频"
						}
					}
				}
			},
			Ordinary_class_add_chapter_introduction: {
				tag: "section",
				class: "Ordinary_class_add_chapter_introduction",
				Ordinary_class_add_chapter_introduction_title: {
					tag: "section",
					class: "Ordinary_class_add_chapter_introduction_title pull-left",
					value: "章节简介："
				},
				Ordinary_class_add_chapter_introduction_content: {
					tag: "section",
					class: "Ordinary_class_add_chapter_introduction_content",
					Ordinary_class_add_chapter_introduction_content_textarea: {
						tag: "textarea",
						class: "Ordinary_class_add_chapter_introduction_content"
					}
				}
			},
			Ordinary_class_add_chapter_time: {
				tag: "section",
				class: "Ordinary_class_add_chapter_time",
				Ordinary_class_add_chapter_time_title: {
					tag: "section",
					class: "Ordinary_class_add_chapter_time_title pull-left",
					value: "学习时长："
				},
				Ordinary_class_add_chapter_time_content: {
					tag: "section",
					class: "Ordinary_class_add_chapter_time_content",
					Ordinary_class_add_chapter_time_content_input: {
						tag: "input",
						class: "Ordinary_class_add_chapter_time_content_input pull-left"
					},
					Ordinary_class_add_chapter_time_content_text: {
						tag: "section",
						class: "Ordinary_class_add_chapter_time_content_text",
						value: "学时"
					},
					Ordinary_class_add_chapter_time_content_prompt: {
						tag: "section",
						class: "Ordinary_class_add_chapter_time_content_prompt",
						value: "如果未设置，则默认学习时长为视频时长3倍取整。"
					}
				}
			},
			Ordinary_class_add_chapter_buttons: {
				tag: "section",
				class: "Ordinary_class_add_chapter_buttons",
				Ordinary_class_add_chapter_button_first: {
					tag: "section",
					class: "Ordinary_class_add_chapter_button",
					value: "保存"
				},
				Ordinary_class_add_chapter_button_second: {
					tag: "section",
					class: "Ordinary_class_add_chapter_button",
					value: "取消"
				}
			}
		},
		Ordinary_class_add_chapter_second: {
			tag: "section",
			class: "Ordinary_class_add_chapter_bottom",
			Ordinary_class_add_section: {
				tag: "section",
				class: "Ordinary_class_add_section",
				value: "+ 添加节"
			}
		}
	}
}

//判断标签个数,总额6,须放入函数中执行
function judge() {
	if($("#Ordinary_class_tag").length > 0) {
	    $("#Ordinary_class_tag").tagsInput( {
	        "defaultText":"增加标签",
	        "onAddTag": function() {
	            var alltags = getTags();
	            if(alltags.length >= 6) {
	                $("#Ordinary_class_tag_tag").hide();
	            }
	        },
	        "onRemoveTag": function() {
	            $("#Ordinary_class_tag").show();
	        }
	    });
	}
}

//取出所有标签
function getTags() {
    var $tagWord =$("#course-tag").siblings(".tagsinput").children(".tag");
    var tags = [];
    for (var i = $tagWord.length; i--; ) {
            tags.push($($tagWord[i]).text().substring(0, $($tagWord[i]).text().length - 1).trim());
         }
    var uqTags = $.unique(tags);
    return uqTags;
}

//保存所有标签
function save_all_tag() {
	var all_tags = getTags();
	var ever_tags = {};
	for(var i = 0; i < all_tags.length; i++){
	    ever_tags[i + 1] = all_tags[i];
	}
	ever_tags = JSON.stringify(ever_tags);
	return ever_tags;
}

///实现创建对象
function Ordinary_class_Create_object_Initialize(this_obj, Initialize_obj) {
	var this_obj = this_obj;
	var first_level_obj = $("<" + Initialize_obj.tag + "></" + Initialize_obj.tag + ">").appendTo(this_obj);
	Ordinary_class_Create_object(first_level_obj, Initialize_obj);
}
function Ordinary_class_Create_object(first_level_obj, first_level_date) {
	for(first_level in first_level_date) {
		if(first_level != "tag" && typeof first_level_date[first_level] != "object") {
			if(first_level == "value") {
				first_level_obj.html(first_level_date[first_level]);
				continue;
			}
			first_level_obj.attr(first_level, first_level_date[first_level]);
		}
		if(typeof first_level_date[first_level] == "object") {
			if(first_level_date[first_level].tag == "input") {
				var second_obj = $("<" + first_level_date[first_level].tag + "/>").appendTo(first_level_obj);
				arguments.callee(second_obj, first_level_date[first_level]);
			}else {
				var second_obj = $("<" + first_level_date[first_level].tag + "></" + first_level_date[first_level].tag + ">").appendTo(first_level_obj);
				arguments.callee(second_obj, first_level_date[first_level]);
			}
		}
	}
}

