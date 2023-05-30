package es.debateo.Model;



import java.sql.Blob;

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
	Blob communityImage;
	
	@Column(name="community_background_image")
	Blob communityBackgroundImage;
	
	@Column(name="community_members")
	int communityMembers;
	
	@Column(name="community_creator")
	String communityCreator;
	
	@Column(name="sensitive_content")
	boolean sensitiveContent;
	
	@Column
	long categoria;

}
