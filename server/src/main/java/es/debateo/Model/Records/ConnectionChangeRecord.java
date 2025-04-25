package es.debateo.Model.Records;

public record ConnectionChangeRecord (String name, boolean connection) {
	
	
public ConnectionChangeRecord(String name, boolean connection) {
    this.name = name;
    this.connection = connection;
}}