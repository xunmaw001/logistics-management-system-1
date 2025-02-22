package com.entity.view;

import com.entity.PeisongwanchengEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 配送完成
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-22 15:19:06
 */
@TableName("peisongwancheng")
public class PeisongwanchengView  extends PeisongwanchengEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public PeisongwanchengView(){
	}
 
 	public PeisongwanchengView(PeisongwanchengEntity peisongwanchengEntity){
 	try {
			BeanUtils.copyProperties(this, peisongwanchengEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
