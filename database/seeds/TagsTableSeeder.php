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
            "Art" => ["Sakimichan", "Dandon Fuga", "Martin Abel", "NeoArtCore", "Annie Mei", "Koyoriin", "Kr0npr1nz", "Manwook Kim", "Zeronis", "RoninDude", "Jeehyung Lee", "Artgerm", "SourAcid", "Sinner". "Yuxiang Chen", "Kate Fox", "Askandy", "Jago", "NeoArtCore", "Unknow Artist"],
            "Cosplay" => ["Jessica Nigri", "Helen Stifler", "Andrasta", "Helly von Valentine", "LeeAnna Vamp", "Lady zero", "Shiroiaisu", "Jas Frost", "TASHA", "Unknow Model"],

            "Games" => [
                "League of legends" => ["Katarina", "LeBlanc", "Sona", "Ahri", "Jinx", "Soraka", "Vi", "Riven", "Janna", "Morgana", "Miss Fortune", "Caitlyn", "Nidalee", "Fiora", "Lux", "Shyvana"],
                "Dota 2" => ["Crystal Maiden", "Windrunner", "Templar assassin"],
                "Lineage 2",
                "World Of Warcraft" => ["Sylvanas"],
                "Overwatch" => ["Widowmaker", "D.Va", "Tracer", "Mercy", "Symmetra"],
                "Lolipop Chainsaw",
                "Resident Evil",
                "Street Fighter" => ["Cammy"],
                "Mortal Combat",
                "Witcher",
                "Legend of the Cryptids",
                "Bioshock",
                "Mass Effect" => ["Liara T'soni"],
                "Metal Gear Solid" => ["Quiet"],
                "Tomb Raider" => ["Lara Croft"],
                "Parasite Eve" => ["Aya Brea"],
                "Resident Evil" => ["Jill Valentine"],
                "Final Fantasy" => ["Sabrith Ebonclaw", "Tifa Lockheart"],
                "Metroid" => ["Samus Aran"],
                "Blazblue" => ["Makoto nanaya"],
                "Darkstalkers" => ["Morrigan"]
            ],
            "Anime" => [
                "Evangelion" => ["Asuka", "Rei"],
                "Seven Deadly Sins" => ["Elizabeth Liones"],
                "Sword Art Online" => ["Sino", "Asuna"],
                "Fate series" => ["Saber"],
                "Gurren Lagann" => ["Yoko Littner", ],
                "Mirai Nikki",
                "Panty and Stocking",
                "Gate",
                "RWBY" => ["Ruby Rose", ],
                "Steins;Gate",
                "Touhou Project",
                "Pokemon" => ["Misty", "Jessie"],
                "Kantai Collection",
                "Monogatari",
                "Durarara",
                "Re:Zero" => ["Ram", "Rem"],
                "One piece" => ["Lin"],
                "Vocaloid" => ["Hatsune Miku"],
                "Legend of Korra" => ["Korra"],
                "Prison School" => ["Hana Midorikawa", "Hana Midorikawa", "Meiko Shiraki"],
                "Kill la Kill" => ["Ryuko Matoi"],
                "Elfen Lied" => ["Lucy/Nyu"],
                "Is It Wrong to Try to Pick Up Girls in a Dungeon?" => ["Hestia"],
                "Dangan ronpa" => ["Junko enoshima"],
                "Super Sonico" => ["Sonico"],
                "Guilty Crown" => ["Inori"],
                "LoveLive!" => ["Kotori Minami"],
                "Seraph of the End" => ["Krul Tepes"]
            ],
            "Comics" => [
                "DC" => ["Poison Ivy", "Harley Quinn", "Batgirl", "Catwoman", "Supergirl", "Power Girl"],
                "Marvel" => ["Black Cat", "Spider-Gwen", "Spider-Girl", "Mary Jane", "Black Widow", "X-23", "Rogue", "Jubilee", "X-Men"]
            ],
            "Films" => [
                "Star Wars",
                "A Nightmare on Elm Street" => ["Freddy Krueger"]
            ],
            "Mults" => [
                "Frozen" => ["Elsa"],
                "Zootopia" => ["Judy Hopps"],
                "TMNT" => ["April O'Neil"],
                "Scooby-Doo" => ["Velma"],
                "Peter Pan" => ["Tinker Bell"],
                "The Little Mermaid" => ["Ariel"],
                "How to train your dragon"
            ],

            "Attributes" => ["Animal ears", "Horns", "Glasses", "Sweets", "Boobs", "Big boobs", "Butt", "Bunny", "Wings", "Steampunk", "Armored", "Maid", "Latex", "Headphones", "Blood", "Magic", "Short dress", "Long dress", "Mini shorts", "Mini skirt", "Stockings", "Pantyhose", "Pink hair", "Blue hair", "Violet hair", "Green hair", "Brunette", "Blonde", "Redhead", "Tattoo"],

            "Style" => ["Cyberpunk", "Fantasy", "Sci-Fi", "Halloween"],

            "NSFW" => ["Ecchi", "Erotic", "Pantsu", "Undewear", "Without underwear", "Wet", "Top less", "Nude", "Rule 34", "Bondage", "Swimsuit", "Lesbian", "Yuri", "Flashing"],

            "Secret" => ["Porn", "Hentai", "Comics", "Manga", "Group"],

            "Сharacter" => ["Sexy", "Cute", "Kaeaii", "Dangerous", "Geek", "Sport", "Loli", "Shame", "Shameless", "Angry", "Demon", "Angel", "Elf", "Famous Artist"],

            "Nationality" => ["Russian", "Asian", "Japan"],
            //"Rule 63", "Humanization", "Crossover"
            "Weapon" => ["Sword", "Bow", "Mecha", "Katana", "Gun"],

            "Environment" => ["Pool", "Hot springs", "Beach", "Backstage"],

            "Photo" => ["PUGOFFKA", "Selfie", "Unknow Photograph"],

        ];

        function addChildTags($parent_tag, $child_tags){
            foreach($child_tags as $child_name => $child_value) {
                if(is_array($child_value))
                    $tag_name = $child_name;
                else
                    $tag_name = $child_value;

                $child_tag = $parent_tag->children_tags()->create(["name" => $tag_name]);

                if(is_array($child_value))
                    addChildTags($child_tag, $child_value);
            }
        }

        foreach($seeds as $main_tag_name => $child_tags){
            $main_tag = Tag::create([
                "name" => $main_tag_name,
                "is_main" => true
            ]);
            addChildTags($main_tag, $child_tags);
        }

    }
}
