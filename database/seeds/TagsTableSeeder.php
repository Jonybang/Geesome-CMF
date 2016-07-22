<?php

use Illuminate\Database\Seeder;
use App\Models\Tag;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            'Art' => ['Sakimichan', 'Dandon Fuga', 'Martin Abel', 'NeoArtCore', 'Annie Mei', 'Koyoriin', 'Kr0npr1nz', 'Manwook Kim', 'Zeronis', 'Ronindude', 'Jeehyung Lee', 'Artgerm', 'SourAcid'],
            'Cosplay' => ['Jessica Nigri', 'Helen Stifler', 'Andrasta', 'Helly von Valentine', 'LeeAnna Vamp'],
            'Games' => ['League of legends', 'Dota', 'Lineage 2', 'World Of Warcraft', 'Overwatch', 'Lolipop Chainsaw', 'Resident Evil', 'Street Fighter', 'Mortal Combat', 'Witcher', 'Legend of the Cryptids', 'Bioshock', 'Mass Effect', 'Metal Gear Solid'],
            'Anime' => ['Evangelion', 'Seven Deadly Sins', 'Sword Art Online', 'Fate series', 'Gurren Lagann', 'Mirai Nikki', 'Panty and Stocking', 'Gate', 'RWBY', 'Steins;Gate', 'Touhou Project', 'Pokemon', 'Kantai Collection', 'Monogatari', 'Durarara'],
            'Films' => ['Star Wars'],
            'Mults' => ['Frozen'],
            'Nationality' => ['Russian', 'Asian', 'Japan'],
            'Сharacter' => ['Sexy', 'Cute', 'Dangerous', 'Famous Artist', 'Geek'],
            'Attributes' => ['Animal ears', 'Boobs', 'Big boobs', 'Bunny', 'Wings', 'Steampunk', 'Maid', 'Latex'],
            'Weapon' => ['Sword', 'Bow', 'Magic', ]
        ];
        foreach($seeds as $parent_tag_name => $child_tags){
            $parent_tag = Tag::create([
                'name' => $parent_tag_name,
                'is_main' => true
            ]);
            foreach($child_tags as $child)
                $parent_tag->children_tags()->create(['name' => $child]);
        }

    }
}
