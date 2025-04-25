package es.debateo.DTO;

import java.util.Date;

public record ChatRecords(String interactuer, Date last_interaction, int messasge_id, String message_body) {}
