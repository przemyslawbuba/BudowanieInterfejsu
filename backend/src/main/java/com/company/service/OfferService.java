package com.company.service;

import com.company.dao.OfferDoa;
import com.company.dao.UserDao;
import com.company.model.Offer;
import com.company.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service(value = "offerService")

public class OfferService {
    @Autowired
    private OfferDoa offerDoa;

    public List<Offer> findAll() {
        List<Offer> list = new ArrayList<>();
        offerDoa.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    public void addOffer(Offer offer) {
        offerDoa.save(offer);
    }

    public void deleteOffer(Integer id){
        offerDoa.deleteById(id);
    }
}
