package es.debateo.Model;



import org.apache.tomcat.util.codec.binary.Base64;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Communities {

	@Id
	@Column(name="community_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	long communityId;
	
	@Column(name="community_name")
	String communityName;
	
	@Column(name="community_description")
	String communityDescription;
	
	@Column(name="community_image")
	byte[] communityImage;
	
	@Column(name="community_background_image")
	byte[] communityBackgroundImage;
	
	@Column(name="community_members")
	int communityMembers;
	
	@Column(name="community_creator")
	String communityCreator;
	
	@Column(name="sensitive_content")
	boolean sensitiveContent;
	
	@Column(name="categoria")
	long categoria;

	@Column(name="private_community")
	boolean privateCommunity;
	@Column(name="block_new_subscriptions")
	boolean blockNewSubscriptions;
	@Column(name="admin_mode")
	boolean adminMode;

	
	
	
	public Communities(long communityId, String communityName, String communityDescription, byte[] communityImage,
			byte[] communityBackgroundImage, int communityMembers, String communityCreator, boolean sensitiveContent,
			long categoria) {
		super();
		this.communityId = communityId;
		this.communityName = communityName;
		this.communityDescription = communityDescription;
		this.communityImage=communityImage;
		this.communityMembers = communityMembers;
		this.communityCreator = communityCreator;
		this.sensitiveContent = sensitiveContent;
		this.categoria = categoria;
	}

	
	
	
	public Communities(String communityName, String communityDescription, byte[] communityImage,
			String communityCreator, boolean sensitiveContent, boolean privateCommunity, boolean blockNewSubscriptions,
			boolean adminMode) {
		super();
		this.communityName = communityName;
		this.communityDescription = communityDescription;
		this.communityImage = communityImage;
		this.communityCreator = communityCreator;
		this.sensitiveContent = sensitiveContent;
		this.privateCommunity = privateCommunity;
		this.blockNewSubscriptions = blockNewSubscriptions;
		this.adminMode = adminMode;
	}




	public Communities(boolean sensitiveContent, boolean privateCommunity, boolean blockNewSubscriptions,
			boolean adminMode) {
		super();
		this.sensitiveContent = sensitiveContent;
		this.privateCommunity = privateCommunity;
		this.blockNewSubscriptions = blockNewSubscriptions;
		this.adminMode = adminMode;
	}




	public boolean isPrivateCommunity() {
		return privateCommunity;
	}



	public void setPrivateCommunity(boolean privateCommunity) {
		this.privateCommunity = privateCommunity;
	}







	



	public boolean isBlockNewSubscriptions() {
		return blockNewSubscriptions;
	}



	public void setBlockNewSubscriptions(boolean blockNewSubscriptions) {
		this.blockNewSubscriptions = blockNewSubscriptions;
	}



	public boolean isAdminMode() {
		return adminMode;
	}



	public void setAdminMode(boolean adminMode) {
		this.adminMode = adminMode;
	}






	public Communities(long communityId, String communityName, String communityDescription, byte[] communityImage,
			byte[] communityBackgroundImage, int communityMembers, String communityCreator, boolean sensitiveContent,
			long categoria, boolean privateCommunity, boolean blockNewSubscriptions, boolean adminMode) {
		super();
		this.communityId = communityId;
		this.communityName = communityName;
		this.communityDescription = communityDescription;
		this.communityImage = communityImage;
		this.communityBackgroundImage = communityBackgroundImage;
		this.communityMembers = communityMembers;
		this.communityCreator = communityCreator;
		this.sensitiveContent = sensitiveContent;
		this.categoria = categoria;
		this.privateCommunity = privateCommunity;
		this.blockNewSubscriptions = blockNewSubscriptions;
		this.adminMode = adminMode;
	}



	public Communities(String communityName, String communityDescription, byte[] communityImage,
			String communityCreator) {
		super();
		this.communityName = communityName;
		this.communityDescription = communityDescription;
		this.communityImage = communityImage;
		this.communityCreator = communityCreator;
	}



	public Communities(long communityId, String communityName) {
		super();
		this.communityId = communityId;
		this.communityName = communityName;
	}
	
	



	public Communities(long communityId, String communityName, byte[] communityImage) {
		super();
		this.communityId = communityId;
		this.communityName = communityName;
		this.communityImage = communityImage;
	}



	public Communities() {
		super();
	}

	


	public long getCommunityId() {
		return communityId;
	}

	public void setCommunityId(long communityId) {
		this.communityId = communityId;
	}

	public String getCommunityName() {
		return communityName;
	}

	public void setCommunityName(String communityName) {
		this.communityName = communityName;
	}

	public String getCommunityDescription() {
		return communityDescription;
	}

	public void setCommunityDescription(String communityDescription) {
		this.communityDescription = communityDescription;
	}

	public byte[] getCommunityImage() {
		return communityImage;
	}

	public void setCommunityImage(byte[] communityImage) {
		
	
		this.communityImage= communityImage;
		
	}

	public byte[] getCommunityBackgroundImage() {
		return communityBackgroundImage;
	}

	public void setCommunityBackgroundImage(byte[] communityBackgroundImage) {
		
		this.communityBackgroundImage= communityBackgroundImage;
	}

	public int getCommunityMembers() {
		return communityMembers;
	}

	public void setCommunityMembers(int communityMembers) {
		this.communityMembers = communityMembers;
	}

	public String getCommunityCreator() {
		return communityCreator;
	}

	public void setCommunityCreator(String communityCreator) {
		this.communityCreator = communityCreator;
	}

	public boolean isSensitiveContent() {
		return sensitiveContent;
	}

	public void setSensitiveContent(boolean sensitiveContent) {
		this.sensitiveContent = sensitiveContent;
	}

	public long getCategoria() {
		return categoria;
	}

	public void setCategoria(long categoria) {
		this.categoria = categoria;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
}