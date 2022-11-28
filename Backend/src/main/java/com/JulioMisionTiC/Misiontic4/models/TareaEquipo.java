package com.JulioMisionTiC.Misiontic4.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data

public class TareaEquipo {
    @Id
    private String id;
    private String nombre;
    private boolean completado;
}
