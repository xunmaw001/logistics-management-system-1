package com.entity.vo;

import com.entity.HuowuqingkuangEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 货物情况
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2022-04-22 15:19:06
 */
public class HuowuqingkuangVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 货物名称
	 */
	
	private String huowumingcheng;
		
	/**
	 * 货物类型
	 */
	
	private String huowuleixing;
		
	/**
	 * 图片
	 */
	
	private String tupian;
		
	/**
	 * 货物重量
	 */
	
	private String huowuzhongliang;
		
	/**
	 * 发货人
	 */
	
	private String fahuoren;
		
	/**
	 * 发货地址
	 */
	
	private String fahuodizhi;
		
	/**
	 * 手机
	 */
	
	private String shouji;
		
	/**
	 * 收货人
	 */
	
	private String shouhuoren;
		
	/**
	 * 收货人手机
	 */
	
	private String shouhuorenshouji;
		
	/**
	 * 收货地址
	 */
	
	private String shouhuodizhi;
		
	/**
	 * 客户账号
	 */
	
	private String kehuzhanghao;
		
	/**
	 * 客户姓名
	 */
	
	private String kehuxingming;
		
	/**
	 * 订单备注
	 */
	
	private String dingdanbeizhu;
		
	/**
	 * 费用
	 */
	
	private Integer feiyong;
		
	/**
	 * 员工姓名
	 */
	
	private String yuangongxingming;
		
	/**
	 * 员工工号
	 */
	
	private String yuangonggonghao;
		
	/**
	 * 收件时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date shoujianshijian;
		
	/**
	 * 状态
	 */
	
	private String zhuangtai;
		
	/**
	 * 用户id
	 */
	
	private Long userid;
				
	
	/**
	 * 设置：货物名称
	 */
	 
	public void setHuowumingcheng(String huowumingcheng) {
		this.huowumingcheng = huowumingcheng;
	}
	
	/**
	 * 获取：货物名称
	 */
	public String getHuowumingcheng() {
		return huowumingcheng;
	}
				
	
	/**
	 * 设置：货物类型
	 */
	 
	public void setHuowuleixing(String huowuleixing) {
		this.huowuleixing = huowuleixing;
	}
	
	/**
	 * 获取：货物类型
	 */
	public String getHuowuleixing() {
		return huowuleixing;
	}
				
	
	/**
	 * 设置：图片
	 */
	 
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}
				
	
	/**
	 * 设置：货物重量
	 */
	 
	public void setHuowuzhongliang(String huowuzhongliang) {
		this.huowuzhongliang = huowuzhongliang;
	}
	
	/**
	 * 获取：货物重量
	 */
	public String getHuowuzhongliang() {
		return huowuzhongliang;
	}
				
	
	/**
	 * 设置：发货人
	 */
	 
	public void setFahuoren(String fahuoren) {
		this.fahuoren = fahuoren;
	}
	
	/**
	 * 获取：发货人
	 */
	public String getFahuoren() {
		return fahuoren;
	}
				
	
	/**
	 * 设置：发货地址
	 */
	 
	public void setFahuodizhi(String fahuodizhi) {
		this.fahuodizhi = fahuodizhi;
	}
	
	/**
	 * 获取：发货地址
	 */
	public String getFahuodizhi() {
		return fahuodizhi;
	}
				
	
	/**
	 * 设置：手机
	 */
	 
	public void setShouji(String shouji) {
		this.shouji = shouji;
	}
	
	/**
	 * 获取：手机
	 */
	public String getShouji() {
		return shouji;
	}
				
	
	/**
	 * 设置：收货人
	 */
	 
	public void setShouhuoren(String shouhuoren) {
		this.shouhuoren = shouhuoren;
	}
	
	/**
	 * 获取：收货人
	 */
	public String getShouhuoren() {
		return shouhuoren;
	}
				
	
	/**
	 * 设置：收货人手机
	 */
	 
	public void setShouhuorenshouji(String shouhuorenshouji) {
		this.shouhuorenshouji = shouhuorenshouji;
	}
	
	/**
	 * 获取：收货人手机
	 */
	public String getShouhuorenshouji() {
		return shouhuorenshouji;
	}
				
	
	/**
	 * 设置：收货地址
	 */
	 
	public void setShouhuodizhi(String shouhuodizhi) {
		this.shouhuodizhi = shouhuodizhi;
	}
	
	/**
	 * 获取：收货地址
	 */
	public String getShouhuodizhi() {
		return shouhuodizhi;
	}
				
	
	/**
	 * 设置：客户账号
	 */
	 
	public void setKehuzhanghao(String kehuzhanghao) {
		this.kehuzhanghao = kehuzhanghao;
	}
	
	/**
	 * 获取：客户账号
	 */
	public String getKehuzhanghao() {
		return kehuzhanghao;
	}
				
	
	/**
	 * 设置：客户姓名
	 */
	 
	public void setKehuxingming(String kehuxingming) {
		this.kehuxingming = kehuxingming;
	}
	
	/**
	 * 获取：客户姓名
	 */
	public String getKehuxingming() {
		return kehuxingming;
	}
				
	
	/**
	 * 设置：订单备注
	 */
	 
	public void setDingdanbeizhu(String dingdanbeizhu) {
		this.dingdanbeizhu = dingdanbeizhu;
	}
	
	/**
	 * 获取：订单备注
	 */
	public String getDingdanbeizhu() {
		return dingdanbeizhu;
	}
				
	
	/**
	 * 设置：费用
	 */
	 
	public void setFeiyong(Integer feiyong) {
		this.feiyong = feiyong;
	}
	
	/**
	 * 获取：费用
	 */
	public Integer getFeiyong() {
		return feiyong;
	}
				
	
	/**
	 * 设置：员工姓名
	 */
	 
	public void setYuangongxingming(String yuangongxingming) {
		this.yuangongxingming = yuangongxingming;
	}
	
	/**
	 * 获取：员工姓名
	 */
	public String getYuangongxingming() {
		return yuangongxingming;
	}
				
	
	/**
	 * 设置：员工工号
	 */
	 
	public void setYuangonggonghao(String yuangonggonghao) {
		this.yuangonggonghao = yuangonggonghao;
	}
	
	/**
	 * 获取：员工工号
	 */
	public String getYuangonggonghao() {
		return yuangonggonghao;
	}
				
	
	/**
	 * 设置：收件时间
	 */
	 
	public void setShoujianshijian(Date shoujianshijian) {
		this.shoujianshijian = shoujianshijian;
	}
	
	/**
	 * 获取：收件时间
	 */
	public Date getShoujianshijian() {
		return shoujianshijian;
	}
				
	
	/**
	 * 设置：状态
	 */
	 
	public void setZhuangtai(String zhuangtai) {
		this.zhuangtai = zhuangtai;
	}
	
	/**
	 * 获取：状态
	 */
	public String getZhuangtai() {
		return zhuangtai;
	}
				
	
	/**
	 * 设置：用户id
	 */
	 
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}
			
}
