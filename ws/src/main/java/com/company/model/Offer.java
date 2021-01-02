package com.company.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CollectionId;

import javax.persistence.*;

@Entity
@Table(name = "offer")
@Getter
@Setter
public class Offer {

    @Id
    @GeneratedValue
    private Integer id;
    @Column
    String name;
    @Column
    String address;
    @Column
    String area;
    @Column
    String price;

}
