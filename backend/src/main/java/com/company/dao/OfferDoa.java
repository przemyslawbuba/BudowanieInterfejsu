package com.company.dao;

import com.company.model.Offer;
import com.company.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferDoa  extends CrudRepository<Offer, Integer> {


}
