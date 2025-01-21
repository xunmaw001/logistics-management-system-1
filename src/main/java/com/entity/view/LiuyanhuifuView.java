package com.entity.view;

import com.entity.LiuyanhuifuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 留言回复
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-22 15:19:06
 */
@TableName("liuyanhuifu")
public class LiuyanhuifuView  extends LiuyanhuifuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public LiuyanhuifuView(){
	}
 
 	public LiuyanhuifuView(LiuyanhuifuEntity liuyanhuifuEntity){
 	try {
			BeanUtils.copyProperties(this, liuyanhuifuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
